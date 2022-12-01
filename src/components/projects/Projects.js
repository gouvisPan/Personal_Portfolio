import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import ProjectSlider from "./ProjectSlider";

const Projects = (props) => {
  const dispath = useDispatch();
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log(inView);
    dispath(uiActions.toggleProjects(inView));
  }, [inView, dispath]);

  return (
    <section id="projects" ref={ref}>
      <h4>A glance into my portfolio</h4>
      <ProjectSlider> </ProjectSlider>
    </section>
  );
};

export default Projects;
