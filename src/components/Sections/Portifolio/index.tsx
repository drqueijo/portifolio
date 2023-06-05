import PortifolioCard from "npm/components/UI/PortifolioCard";
import * as S from "./styles";
import Title from "npm/components/UI/Title";
import useAnimateOnScroll from "npm/hooks/useAnimateOnScroll";
import { api } from "npm/utils/api";

const PortfolioSection = () => {
  const elementRef = useAnimateOnScroll(0);
  const projects = api.project.getAll.useQuery()

  return (
    <S.Wrapper id="portfolio" ref={elementRef}>
      <Title>Portfolio</Title>
      <div>
        {projects && projects.data && projects.data?.map((portifolioProps, index) => (
          <PortifolioCard 
            {...portifolioProps} 
            index={index}
            key={portifolioProps.title}
          />
        ))}
      </div>
    </S.Wrapper>
  );
};

export default PortfolioSection;
