import useAnimateOnScroll from "npm/hooks/useAnimateOnScroll";
import { type TitlesProps } from "npm/types/types";

import * as S from "./styles";

const Title = ({ children }: TitlesProps) => {
  const elementRef = useAnimateOnScroll();

  return <S.Title ref={elementRef}>{children}</S.Title>;
};

export default Title;
