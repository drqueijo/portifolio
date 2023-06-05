import Title from "npm/components/UI/Title";
import * as S from "./styles";
import useAnimateOnScroll from "npm/hooks/useAnimateOnScroll";
import { Container } from "npm/styles/globals";

const AboutSection = () => {
  const elementRef = useAnimateOnScroll();

  return (
    <S.AboutSection id="about" ref={elementRef}>
      <Container>
        <Title>About</Title>
        <S.AboutTexts>
          <p>My name is Matheus Silverio, I’m from Brazil and I’m 25 years old.</p>
          <p></p>
          <p>I describe myself as a passionate developer who loves coding, open source, and the web platform. </p>
          <p>
            Aside from my job, I like to create and contribute to open source projects. 
            That helps me to learn a ton of new stuff, grow as a developer and support 
            other open source projects.
          </p>
          <p></p>
          <p>My passion for technology was born when I was 5 years old, when I first used a computer.</p>
          <p></p>
          <p>I started as a Front-end Developer on 3/8/2019. Since then I have been dedicating about 12 hours a day to studies.</p>
          <p></p>
          <p>I have a huge passion for helping people who are just starting. Codes, movies, video games, music, podcast and studies are subjects that interest me.</p>
          <p></p>
          <p>I see that I am on the right path because I love helping people who are starting out, just as I was a beginner. Furthermore, I see the results that the dedicated hours bring.</p>
          <p></p>
          <p>
            In my spare time I usually read about <u>reactive</u>, 
            <u>asynchronous </u>and<u> object-oriented</u> 
            programming. I like to read 
            <a 
              rel="noopener" 
              target="_blank" 
              title="Martin's book series" 
              href="https://www.amazon.com/dp/B085D95SX5?searchxofy=true&amp;binding=kindle_edition&amp;ref_=dbs_s_aps_series_rwt_tkin"
            >
              Robert C. Martin’s book series.
            </a>
          </p>
          <p></p>
          <p>
            I work as Fullstack developer using techs like 
            <a rel="noopener" target="_blank" title="React.js documentation" href="https://pt-br.reactjs.org/">
              React.js
            </a>, 
            <a target="_blank" title="Go (golang) documentation" href="https://go.dev/">
              Go
            </a>, 
            <a rel="noopener" target="_blank" title="TypeScript documentation" href="https://www.typescriptlang.org/">
              TypeScript
            </a>,  
            <a rel="noopener" target="_blank" title="React Testing Library documentation" href="https://testing-library.com/docs/react-testing-library/intro/">
              Cypress
            </a> 
            and more.
          </p>
        </S.AboutTexts>
      </Container>
    </S.AboutSection>
  );
};

export default AboutSection;
