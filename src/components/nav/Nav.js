import React from "react";
import "./Nav.css";
import { RiHome3Fill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveIcon("#")}
        className={activeIcon === "#" ? "active" : ""}
      >
        <RiHome3Fill />
      </a>
      <a
        href="#about"
        onClick={() => setActiveIcon("#about")}
        className={activeIcon === "#about" ? "active" : ""}
      >
        <FaUser />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active" : ""}
      >
        <FaCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active" : ""}
      >
        <MdContactPage />
      </a>
    </nav>
  );
};

export default Nav;
