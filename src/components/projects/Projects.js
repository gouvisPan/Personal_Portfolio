import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";
import Dummy2 from "./../../assets/dummy2.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
      <div className="portfolio-container">
      
        <div className="react_projects_container">
          <ProjectCard label="Weather App" img={WeatherApp}/>
          <ProjectCard label="Dummy App" img={Dummy}/>
          <ProjectCard label="Dummy App 2" img={Dummy2}/>
        </div>

        <div className="android_projects_container"></div>
        <div className="content-buttons">
            <button className="button-active">Web</button>
            <button>ANDROID</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
