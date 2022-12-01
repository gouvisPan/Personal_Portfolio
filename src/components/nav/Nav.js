import "./Nav.css";
import useScroll from "../../hooks/useScroll";
import { RiHome3Fill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaCode, FaUser } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";

const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");
  const scrollPosition = useScroll();
  const headerState = useSelector((state) => state.ui.headerInView);
  const projectsState = useSelector((state) => state.ui.projectsInView);
  const aboutState = useSelector((state) => state.ui.aboutInView);
  const contactState = useSelector((state) => state.ui.contactInView);

  const [height, width] = useWindowSize();
  const navCss = scrollPosition < 130 ? "fixed-nav" : "floating-nav";

  useEffect(
    () => {
      headerState && setActiveIcon("#");
      projectsState && scrollPosition > 150 && setActiveIcon("#projects");
      aboutState && setActiveIcon("#about");
      contactState && setActiveIcon("#contact");
    },
    [headerState, projectsState, aboutState, contactState],
    activeIcon
  );

  return (
    <nav className={navCss}>
      <div className="normal-nav-container">
        <a
          href="# "
          onClick={() => setActiveIcon("#")}
          className={activeIcon === "#" ? "active" : ""}
        >
          <RiHome3Fill />
          <p>Home</p>
        </a>

        <a
          href="#projects"
          onClick={() => setActiveIcon("#projects")}
          className={activeIcon === "#projects" ? "active" : ""}
        >
          <FaCode />
          <p>Projects</p>
        </a>
        {width > 1250 && (
          <a
            href="#about"
            onClick={() => setActiveIcon("#about")}
            className={activeIcon === "#about" ? "active" : "aboutH"}
          >
            <FaUser />
            <p>About</p>
          </a>
        )}

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
    </nav>
  );
};

export default Nav;
