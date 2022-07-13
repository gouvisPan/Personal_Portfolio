import React from "react";
import { useState } from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const ContactCard = (props) => {
  const [descShown, setDescShown] = useState(false);
  let descCss = "desc-container";
  const desc = props.desc;
  descCss = descShown ? "desc-container-hovered" : "desc-container";

  return (
    <div
      className="contact-card "
      onMouseEnter={() => setDescShown(true)}
      onMouseLeave={() => setDescShown(false)}
    >
      <a href={props.link} target="_blank">
        {props.children}
      </a>
      <div className={descCss}>
        <TypeWriterEffect startDelay={100} text ="BLAHBLAHBLAH" typeSpeed={100}/>
      </div>
    </div>
  );
};

export default ContactCard;
