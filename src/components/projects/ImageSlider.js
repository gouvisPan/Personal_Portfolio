import React from "react";
import { useState } from "react";
import "./ImageSlider.css";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const ImageSlider = ({ src, order, scale = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = src.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  return (
    <div className={`slider-container " ${order === 1 ? "order" : ""}`}>
      {src.map((item, i) => {
        return (
          <div
            className={currentSlide === i ? "slide show" : "slide"}
            key={item}
          >
            {Array.isArray(item)
              ? currentSlide === i && (
                  <div
                    className={`three-img-container ${
                      scale === 1 ? "" : "scaled"
                    }`}
                  >
                    {item.map((img, j) => (
                      <li>
                        <img
                          src={img}
                          className={`project-img-small ${
                            scale === 1 ? "" : "showcase"
                          }`}
                          key={j}
                        ></img>
                      </li>
                    ))}
                  </div>
                )
              : currentSlide === i && (
                  <img src={item} className="project-img"></img>
                )}

            <IoIosArrowDropleft className="arrow left" onClick={prevSlide} />
            <IoIosArrowDropright className="arrow right" onClick={nextSlide} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
