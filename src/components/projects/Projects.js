import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";
import Dummy2 from "./../../assets/dummy2.png";

import ProjectSlide from "./ProjectSlide";

const Projects = (props) => {
 
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
      <ProjectSlide></ProjectSlide>
    </section>
  );
};

export default Projects;
