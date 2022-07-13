import React from "react";

const ContactCard = (props) => {
  return (
    <div className="contact-card">
      <a href={props.link} target="_blank">
        {props.children}
      </a>
    </div>
  );
};

export default ContactCard;
