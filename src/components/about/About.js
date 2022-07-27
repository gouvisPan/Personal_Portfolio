import React from "react";
import { FaUniversity } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./About.css";
import ME from "./../../assets/man.jpg";
import AnimationCanvas from "../UI/AnimationCanvas";
import useScroll from "../../hooks/useScroll";

const About = () => {
  const scrollPosition = useScroll();
  
  let dynamicScale = .5 - (scrollPosition)/180 ; 

  if(scrollPosition>500 ){
    dynamicScale = 2.25;
  }
  
  if(scrollPosition>700){
    dynamicScale = 6  - (scrollPosition)/180 ;
    
  }
  console.log(dynamicScale) ;

  return (
    <section id="about">
      <h4>Some info about me</h4>

      <div className="container about_container">
        <div className="me_con">
          {/* <img src={ME} className="me_img" /> */}
        </div>

        
        <div className="info">
        <div className="info_descr_left">
        <AnimationCanvas scale={dynamicScale} />
            <p>
              Driven by creativity, I've dedicated the past two years in the proccess of learning 
              how to build responsive applications for both Android and Web. 
            </p>
          </div>
          <div className="cards_container_right">
            <articlele className="about_card">
              <FaUniversity />
              <h5>Education</h5>
              <small>
                <strong>Excellence </strong> at Applied Informatics UoM
              </small>
            </articlele>
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
        </div>
      </div>
    </section>
  );
};

export default About;
