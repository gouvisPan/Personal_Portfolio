import React from "react";
import MailForm from "./MailForm";

const ExpandableContactCard = (props) => {
  const cardCss = props.isClicked ? "expanded-card" : "expandable-contact-card";

  return (
    <div className={cardCss} onClick={props.onClick}>
      <div className="icon">{props.children}</div>
      <div className="form">
        <MailForm />
      </div>
    </div>
  );
};

export default ExpandableContactCard;
