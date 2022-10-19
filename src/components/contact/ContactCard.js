import React from "react";
import "./Contact.css";

const ContactCard = (props) => {
  const css = props.hide ? "hidden-card" : "contact-card";

  return (
    <a href={props.link} target="_blank" className={css}>
      {props.children}
    </a>
  );
};

export default ContactCard;
