import React from "react";
import "./Nav.css";
import useScroll from "../../hooks/useScroll";
import { RiHome3Fill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");
  const scrollPosition = useScroll();

  const navCss = scrollPosition < 130 ? "fixed-nav" : "floating-nav";

  return (
    <nav className={navCss}>
      <a
        href="#"
        onClick={() => setActiveIcon("#")}
        className={activeIcon === "#" ? "active" : ""}
      >
        <RiHome3Fill />
        <p>Home</p>
      </a>

      <a
        href="#about"
        onClick={() => setActiveIcon("#about")}
        className={activeIcon === "#about" ? "active" : ""}
      >
        <FaUser />
        <p>About</p>
      </a>
      <a
        href="#projects"
        onClick={() => setActiveIcon("#projects")}
        className={activeIcon === "#projects" ? "active" : ""}
      >
        <FaCode />
        <p>Projects</p>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveIcon("#contact")}
        className={activeIcon === "#contact" ? "active last-child" : "last-child"}
      >
        <MdContactPage />
        <p>Contact</p>
      </a>
    </nav>
  );
};

export default Nav;
