import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactCard from "./ContactCard";
import "./Contact.css";

const ContactCards = () => {
  return (
    <div className="contact-cards">
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

      <ContactCard
        link="https://m.me/panagiotis.gouvis"
        desc="Send me a direct message in facebook messenger"
      >
        <FaFacebookMessenger />
      </ContactCard>
      <ContactCard
        link="https://api.whatsapp.com/send?phone=306974133780"
        desc="Send me a direct message in Whatsapp"
      >
        <IoLogoWhatsapp />
      </ContactCard>
    </div>
  );
};

export default ContactCards;
