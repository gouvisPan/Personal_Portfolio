import React from "react";
import "./Header.css";
import CvSec from "./CvSec";
import ME from "./../../assets/me.png";
import HeaderContacts from "./HeaderContacts";
import Typewriter from "react-ts-typewriter";
import Sphere from "./Sphere";

const Header = () => {
  return (
    <header id="home">
      <div className="container.header__container"> </div>
      <h5>
        <Typewriter text="Hallo, my name is" cursor={false} speed={90} />
      </h5>
      <h1>
        <Typewriter
          text="Panagiotis Gouvis"
          cursor={false}
          speed={70}
          delay={900}
        />
      </h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CvSec />
      {/* <HeaderContacts /> */}
      {/* <div className="me">
        <img src={ME} alt="me working" />
      </div> */}
      <Sphere />
    </header>
  );
};

export default Header;
