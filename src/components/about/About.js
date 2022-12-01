import React, { useEffect } from "react";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./About.css";
import { useInView } from "react-intersection-observer";
import Carousel from "./Carousel/Carousel";
import { webMainArray, webSecArray, android } from "../../data/ProjectsData";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const About = () => {
  const { ref, inView } = useInView();
  const dispath = useDispatch();

  useEffect(() => {
    console.log(inView);
    dispath(uiActions.toggleAbout(inView));
  }, [inView, dispath]);

  return (
    <section id="about">
      <h4>Some info about me</h4>
      <div className="about-container">
        <div className={`cards_container ${inView ? "slide-in" : ""}`}>
          <article className="about_card">
            <FaUniversity />
            <h5>Education</h5>
            <small>
              <strong>Excellence </strong> at Applied Informatics UoM
            </small>
          </article>
          <article className="about_card">
            <AiFillStar />
            <h5>Skillset</h5>
            <small>Web and Android development</small>
          </article>
          <article href="#projects" className="about_card">
            <FaFolderOpen />
            <h5>Projects</h5>
            <small>
              10+ <strong> React.js </strong> and
              <strong> Kotlin </strong> projects
            </small>
          </article>
        </div>
        <div className="carousels" ref={ref}>
          <Carousel array={webMainArray} spin={1} />
          <Carousel array={webSecArray} spin={0} />
          <Carousel array={android} spin={1} />
        </div>
      </div>
    </section>
  );
};

export default About;
