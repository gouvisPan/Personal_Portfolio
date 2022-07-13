import React from "react";
import CV from "./../../assets/CV.pdf";

const CvSec = () => {
  return (
    <div className="cv">
      <a href={CV} download className="btn">
        My CV
      </a>
      <a className="btn btn-main"> Let's talk</a>
    </div>
  );
};

export default CvSec;
