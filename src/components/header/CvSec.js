import React from "react";
import CV from "./../../assets/CV.pdf";

const CvSec = () => {
  return (
    <div className="cv">
      <a href={CV} download className="btn">
        My CV
      </a>
      <a href="#contact" className="btn btn-main">
        Find Me
      </a>
    </div>
  );
};

export default CvSec;
