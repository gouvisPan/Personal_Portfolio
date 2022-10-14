import React from "react";
import "./Projects.css";

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
