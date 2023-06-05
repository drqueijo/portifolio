import { type NextPage } from "next";
import Header from "npm/components/Header";
import Home from 'npm/components/Sections/Home'
import Portifolio from "npm/components/Sections/Portifolio";

const FirstPage: NextPage = () => {
  return (
    <>
      <Header />
      <Home />
      <Portifolio />
    </>
  );
};

export default FirstPage;
