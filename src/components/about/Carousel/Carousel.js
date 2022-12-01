import React from "react";
import "./Carousel.css";

const Carousel = (props) => {
  const carouselWrapCss = props.spin ? "carousel-wrap" : "carousel-wrap-r";
  const spinCss = props.spin ? "animate" : "animate-r";
  return (
    <div className="carousel-container">
      <div className={`${carouselWrapCss} ${spinCss}`}>
        <div className="carousel">
          {props.array.map((tool) => {
            return <h4>{tool}</h4>;
          })}
        </div>
        <div className="carousel">
          {props.array.map((tool) => {
            return <h4>{tool}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
