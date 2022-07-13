import React from "react";
import "./Header.css";
import CvSec from "./CvSec";
import ME from "./../../assets/me.png";
import HeaderContacts from "./HeaderContacts";

const Header = () => {
  return (
    <header id="home">
      <div className="container.header__container"> </div>
      <h5>Hello i am</h5>
      <h1>Panagiotis Gouvis</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CvSec />
      <HeaderContacts />
      {/* <div className="me">
        <img src={ME} alt="me working" />
      </div> */}
    </header>
  );
};

export default Header;
