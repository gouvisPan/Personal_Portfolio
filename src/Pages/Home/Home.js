import React from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import useWindowSize from "../../hooks/useWindowSize";
import Nav from "../../components/nav/Nav";
import { useInView } from "framer-motion";

const Home = () => {
  const [height, width] = useWindowSize();

  return (
    <div className="App">
      {width > 600 ? <Nav /> : ""}
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
