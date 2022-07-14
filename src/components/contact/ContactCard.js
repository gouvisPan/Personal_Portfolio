import React from "react";
import { useState } from "react";
import TypeWriter from "typewriter-effect";

const ContactCard = (props) => {
  return (
    <a href={props.link} target="_blank" className="contact-card ">
      {props.children}
    </a>
  );
};

export default ContactCard;
