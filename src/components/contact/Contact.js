import React from "react";
import "./Contact.css";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactCard from "./ContactCard";
import { useState } from "react";
import ExpandCard from "./ExpandCard";

const Contact = () => {
  const [mailIsExpanded, setMailIsExpaned] = useState(false);

  const mailClickHandler = () => {
    setMailIsExpaned(!mailIsExpanded);
  };

  return (
    <section id="contact">
      <h4>Find Me</h4>
      <div className="contact-container">
        <div className="find-me">
          <ContactCard
            link="https://www.linkedin.com/in/panagiotis-gouvis-648969229/"
            desc="Check me out in LinkedIn"
          >
            <FiLinkedin />
          </ContactCard>
          <ContactCard
            link="https://github.com/gouvisPan"
            desc="Check me out in Github"
          >
            <FiGithub />
          </ContactCard>
          <ContactCard
            link="https://www.facebook.com/panagiotis.gouvis"
            desc="Check me out in Facebook"
          >
            <FiFacebook />
          </ContactCard>
        </div>

        <div className="contact-me">
          <ContactCard
            link="https://m.me/panagiotis.gouvis"
            desc="Send me a direct message in facebook messenger"
            hide={mailIsExpanded}
          >
            <FaFacebookMessenger />
          </ContactCard>

          <ContactCard
            link="https://api.whatsapp.com/send?phone=306974133780"
            desc="Send me a direct message in Whatsapp"
            hide={mailIsExpanded}
          >
            <IoLogoWhatsapp />
          </ContactCard>
          <ExpandCard link="https://facebook.com" onClick={mailClickHandler}>
            <MdMarkEmailUnread />
          </ExpandCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
