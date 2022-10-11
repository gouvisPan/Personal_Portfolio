import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";
import Dummy2 from "./../../assets/dummy2.png";

import ProjectSlider from "./ProjectSlider";

const Projects = (props) => {
 
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
      <ProjectSlider></ProjectSlider>
    </section>
  );
};

export default Projects;
