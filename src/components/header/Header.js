import React from "react";
import "./Header.css";
import CvSec from "./CvSec";
import Typewriter from "react-ts-typewriter";
import AnimationCanvas from "../UI/AnimationCanvas";
import useScroll from "../../hooks/useScroll";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const scrollPosition = useScroll();
  let dynamicScale = 1.5 - scrollPosition / 180;
  if (scrollPosition > 265) {
    dynamicScale = 0;
  }

  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hi, my name is</h5>
        <h1>Panagiotis Gouvis.</h1>
        <h1 className="text-light">
          {" "}
          <Typewriter
            text="I create Web and Mobile experiences."
            cursor={false}
            speed={40}
            delay={100}
          />
        </h1>
        <CvSec />
      </div>

      <div className="spheres">
        <AnimationCanvas scale={dynamicScale} />
      </div>
    </header>
  );
};

export default Header;
