import React from "react";
import Typewriter from "react-ts-typewriter";
import "./Description/Description.css";
import Description from "./Description/Description";
import Main from "./Main/Main";
import { RiHome2Fill } from "react-icons/ri";
import img1 from "../../assets/hypecoach/main/main.png";
import img2 from "../../assets/hypecoach/main/diet-fragment.png";
import img3 from "../../assets/hypecoach/main/diet.png";
import img4 from "../../assets/hypecoach/main/menu.png";
import img5 from "../../assets/hypecoach/main/profile.png";
import img6 from "../../assets/hypecoach/main/delete.png";
import { NavLink } from "react-router-dom";
import ImageSlider from "../../components/projects/ImageSlider";

const AndroidInfo = () => {
  const projectImages = [
    [img1, img2, img3],
    [img4, img5, img6],
  ];

  return (
    <div className="presentation-container">
      <div className="header">
        <NavLink to="/#projects">
          <RiHome2Fill className="fixed-home" />
        </NavLink>
        <h1>HypeCoach</h1>
        <p>
          <Typewriter
            text="The Workout and Diet coaching App"
            cursor={false}
            speed={40}
            delay={100}
          />
        </p>
      </div>
      <Description />
      <div className="positioning-wrapper">
        <ImageSlider src={projectImages} scale={1.5} />
      </div>
      {/* <Main /> */}
    </div>
  );
};

export default AndroidInfo;
