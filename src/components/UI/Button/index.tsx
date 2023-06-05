import * as S from "./styles";

import { type ButtonProps } from "npm/types/types";

const Button = ({ children }: ButtonProps) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
