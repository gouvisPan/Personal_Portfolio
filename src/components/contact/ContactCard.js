import React from "react";

const ContactCard = (props) => {
  
  const css = props.hide ? "hidden-card" : "contact-card";

  return (
    <a href={props.link} target="_blank" className={css}>
      {props.children}
    </a>
  );
};

export default ContactCard;
