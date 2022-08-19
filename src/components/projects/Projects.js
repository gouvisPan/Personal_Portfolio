import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";
import Dummy2 from "./../../assets/dummy2.png";
import ProjectCard from "./ProjectCard";
import { GrAndroid } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = (props) => {
 const [isReactClicked,setIsReactClicked] = useState(true);
 const [isAndroidClicked,setIsAndroidClicked] = useState(false);
 const rCss = isReactClicked ? "active-button" : "button";
 const aCss = isAndroidClicked ? "active-button" : "button";
 
 const reactClickHandler =() =>{
    setIsReactClicked(true);
    setIsAndroidClicked(false);

 }
 const androidClickHandler =() =>{
  setIsAndroidClicked(true);
  setIsReactClicked(false);
 }

 
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
     <div className="portfolio-container">
     {isReactClicked && <div className="react_projects_container">
          <Link to="/projects">
          <ProjectCard label="Weather App" img={WeatherApp} />
          </Link>
          <ProjectCard label="Dummy App" img={Dummy} />
          <ProjectCard label="Dummy App 2" img={Dummy2}/>
        </div>}

      {isAndroidClicked &&  <div className="android_projects_container">
          <ProjectCard label="Weather App" img={WeatherApp}/>
          <ProjectCard label="Dummy App" img={Dummy}/>
          <ProjectCard label="Dummy App 2" img={WeatherApp}/>
      </div> }

        <div className="content-buttons">
         <GrReactjs className={rCss} onClick={reactClickHandler}/> 
          <GrAndroid className={aCss} onClick={androidClickHandler}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
