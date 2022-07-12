import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h4>Some info about me</h4>

      <div className="container about_container">
        <div className="me_img"></div>
        <div className="info">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
