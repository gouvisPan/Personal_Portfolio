import React from "react";
import "./ProjectSlide.css";
import ProjectTech from "./ProjectTech";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProjectSlide = (props) => {
  const { ref, inView } = useInView();
  return (
    <div
      className={inView ? `project-container slide-in` : "project-container"}
      ref={ref}
    >
      <ImageSlider src={props.imgs} order={props.order} />
      <div className="project-details">
        <h4>{props.name}</h4>
        <p>{props.desc}</p>
        <div className="tech-container">
          {props.tech.map((tech) => (
            <ProjectTech techName={tech} key={tech} />
          ))}
        </div>

        <a href={props.git} target="_blank">
          <FiGithub /> <div className="icon-text">Source Code</div>
        </a>
        {props.android ? (
          <Link to="/androidinfo">
            <AiOutlineLink />
            <div className="icon-text">More Info</div>
          </Link>
        ) : (
          <a href={props.demo} target="_blank">
            <AiOutlineLink />
            <div className="icon-text">Live Demo</div>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectSlide;
