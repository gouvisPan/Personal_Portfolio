import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./About.css";
import ME from "./../../assets/profile.png";
import AnimationCanvas from "../UI/AnimationCanvas";
import useScroll from "../../hooks/useScroll";
import { useInView } from "react-intersection-observer";

const About = () => {
  const scrollPosition = useScroll();
  const { ref, inView } = useInView();
  let dynamicScale = 0;

  if (scrollPosition > 300) {
    dynamicScale = 1.5 - scrollPosition / 180;
  }

  if (scrollPosition > 675) {
    dynamicScale = 2.25;
  }

  if (scrollPosition > 900) {
    dynamicScale = 7.2 - scrollPosition / 180;
  }

  return (
    <section id="about">
      <h4>Some info about me</h4>

      <div className="about-container">
        <div className="info_descr_left">
          <AnimationCanvas scale={dynamicScale} />
        </div>
        <div ref={ref} className={`info ${inView ? "slide" : ""}`}>
          <div className="cards_container_right">
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
              <small>Android and Web development</small>
            </article>
            <article href="#projects" className="about_card">
              <FaFolderOpen />
              <h5>Projects</h5>
              <small>
                10+ <strong>Kotlin</strong> and
                <strong> React.js</strong> projects
              </small>
            </article>
          </div>

          <div className="me_con">
            <img src={ME} className="me_img" />
            <p>
              Driven by creativity, I've dedicated the past two years in the
              proccess of learning how to build responsive applications for both
              Android and Web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
