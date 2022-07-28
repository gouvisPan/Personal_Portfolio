import React from "react";
import './Projects.css'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} onClick={props.onClick} />
      <h5>{props.label}</h5>
    </div>
  );
};

export default ProjectCard;
