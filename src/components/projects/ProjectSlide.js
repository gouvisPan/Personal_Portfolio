import React from "react";
import "./ProjectSlide.css";
import ProjectTech from "./ProjectTech";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import ImageSlider from "./ImageSlider";

const ProjectSlide = (props) => {
  console.log(props);

  const img = props.android ? (
    <div className="project-img-container"  style={{order: props.order }}>
      <img src={props.imgs[0]} className="project-a-img" ></img>
      <img src={props.imgs[1]} className="project-a-img"></img>
      <img src={props.imgs[2]} className="project-a-img"></img>
    </div>
  ) : (
    <img src={props.imgs[0]} className="project-img" style={{order: props.order }}></img>
  );

  return (
    <div className="project-container" >
       {img}
      <div className="project-details">
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <div className="tech-container">
          {props.tech.map((tech) => (
            <ProjectTech techName={tech} />
          ))}
        </div>

        <a href={props.git} target="_blank">
          <FiGithub /> <div className="icon-text">Source Code</div>
        </a>
        <a href={props.demo} target="_blank">
          <AiOutlineLink />
          <div className="icon-text">Live Demo</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectSlide;
