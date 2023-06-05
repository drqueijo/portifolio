import { type  ProjectsProps } from "npm/types/types";
import * as S from "./styles";
import useAnimateOnScroll from "npm/hooks/useAnimateOnScroll";

const PortfolioItems = ({ image, title, about, link, sourcelink, index }: ProjectsProps) => {

  const elementRef = useAnimateOnScroll(0);

  return (
    <S.WorkItem ref={elementRef} style={{ animationDelay: `${index * 200}ms` }} key={link} >
      <S.Wrapper>
        <S.WorkItemTitle>{title}</S.WorkItemTitle>
        <S.WorkItemDescription>{about}</S.WorkItemDescription>

        <S.WorkItemButton>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit →
          </a>
          <a href={sourcelink} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </S.WorkItemButton>
      </S.Wrapper>
    <S.WorkItemImage src={image.url} alt={`Project ${title}`} />
  </S.WorkItem>
  );
};
export default PortfolioItems;
