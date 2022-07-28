import React from "react";
import "./Projects.css";
import WeatherApp from "./../../assets/FullApp.png";
import Dummy from "./../../assets/dummy.png";
import Dummy2 from "./../../assets/dummy2.png";
import ProjectCard from "./ProjectCard";
import { GrAndroid } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { useState } from "react";

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
 const projectClickHandler = (num) =>{
      props.redirect(num);
 }
 
  return (
    <section id="projects">
      <h4>A glance into my portfolio</h4>
     <div className="portfolio-container">
     {isReactClicked && <div className="react_projects_container">
          <ProjectCard label="Weather App" img={WeatherApp} onClick={projectClickHandler(1)}/>
          <ProjectCard label="Dummy App" img={Dummy} onClick={projectClickHandler}/>
          <ProjectCard label="Dummy App 2" img={Dummy2} onClick={projectClickHandler}/>
        </div>}

      {isAndroidClicked &&  <div className="android_projects_container"></div> }

        <div className="content-buttons">
         <GrReactjs className={rCss} onClick={reactClickHandler}/> 
          <GrAndroid className={aCss} onClick={androidClickHandler}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
