import React from "react";
import MailForm from "./MailForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
import Delay from "../helpers/Delay";

const ExpandCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardCss = isExpanded ? "expanded-card" : "expandable-contact-card";

  const openHandler = () => {
    if (!isExpanded) {
      props.onClick();
      setIsExpanded(true);
    }
  };

  const closeHandler = () => {
    setIsExpanded(false);
    props.onClick();
  };

  return (
    <div className={cardCss} onClick={openHandler}>
      {!isExpanded && <div className="icon">{props.children}</div>}
      {isExpanded && (
        <Delay>
          <MailForm onClose={closeHandler} />
        </Delay>
      )}
    </div>
  );
};

export default ExpandCard;
