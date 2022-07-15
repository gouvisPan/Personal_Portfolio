import React from "react";
import { useState } from "react";
import TypeWriter from "typewriter-effect";

const ContactCard = (props) => {

  const cardCss = props.expand ? "contact-card-exp" : "contact-card";

  return (
    <a href={props.link} target="_blank" className={cardCss}>
      {props.children}
    </a>
  );
};

export default ContactCard;
