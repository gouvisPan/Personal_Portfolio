import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./About.css";
import ME from "./../../assets/man.jpg";

const About = () => {
  return (
    <section id="about">
      <h4>Some info about me</h4>

      <div className="container about_container">
        <div className="me_con">
          <img src={ME} className="me_img" />
        </div>

        <div className="info">
          <div className="cards_container">
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
          <div className="info_descr">
            <p>
              Driven by creativity, I've dedicated the past two years in the proccess of learning 
              how to build responsive applications for both Android and Web. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
