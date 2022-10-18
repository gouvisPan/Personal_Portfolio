import React from "react";
import { useState } from "react";
import "./ImageSlider.css";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const ImageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = props.src.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider-container" style={{ order: props.order }}>
      <IoIosArrowDropleft className="arrow left" onClick={prevSlide} />
      <IoIosArrowDropright className="arrow right" onClick={nextSlide} />
      {props.src.map((item, i) => {
        return (
          <div className={currentSlide === i ? "slide hidden" : "slide shown"}>
            {Array.isArray(item)
              ? currentSlide === i &&
                item.map((img, j) => (
                  <li>
                    <img src={img} className="project-img-small" key={j}></img>
                  </li>
                ))
              : currentSlide === i && (
                  <img src={item} className="project-img"></img>
                )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
