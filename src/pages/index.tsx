import { type NextPage } from "next";
import Header from "npm/components/Header";
import About from "npm/components/Sections/About";
import Contact from "npm/components/Sections/Contact";
import Home from 'npm/components/Sections/Home'

import Portifolio from "npm/components/Sections/Portifolio";
import Footer from "npm/components/UI/Footer";

const FirstPage: NextPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portifolio />
      <Contact />
      <Footer />
    </>
  );
};

export default FirstPage;
