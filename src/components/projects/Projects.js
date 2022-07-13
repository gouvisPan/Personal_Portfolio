import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";

const Projects = () => {
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
      <div className="protfolio_container">
        <div className="react_projects_container">
          <div className="project_card">
            <img src={WeatherApp} />
            <h5>Weather App</h5>
          </div>
          <div className="project_card">
            <img src={Dummy} />
            <h5>Dummy App</h5>
          </div>
        </div>

        <div className="android_projects_container"></div>
      </div>
    </section>
  );
};

export default Projects;
