import Title from "npm/components/UI/Title";
import Button from "npm/components/UI/Button";

import * as S from "./styles";

import { Container } from "npm/styles/globals";

const ContactSection = () => {
  return (
    <S.ContactSection id="contact">
      <Container>
        <Title>Contact</Title>

        <S.ContactMeText>
          If you want to carry out a project or chat with me, do not hesitate to
          send me an email:{" "}
          <a href="mailto:silveriomat1234@gmail.com">caioamfr@gmail.com</a>
        </S.ContactMeText>

        <a
          href="https://www.linkedin.com/in/drqueijo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Contact</Button>
        </a>
      </Container>
    </S.ContactSection>
  );
};

export default ContactSection;
