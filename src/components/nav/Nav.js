import React from "react";
import "./Nav.css";
import useScroll from "../../hooks/useScroll";
import { RiHome3Fill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [inProjects, setInProjects] = useState(true);
  const [activeIcon, setActiveIcon] = useState("#");
  const scrollPosition = useScroll();

  const navCss = scrollPosition < 130 ? "fixed-nav" : "floating-nav";
  const finalCss = !inProjects ? "home-nav" : navCss;
  return (
    <nav className={finalCss}>
      {inProjects && (
        <div className="normal-nav-container">
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
            className={
              activeIcon === "#contact" ? "active last-child" : "last-child"
            }
          >
            <MdContactPage />
            <p>Contact</p>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
