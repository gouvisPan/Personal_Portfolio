import React from "react";
import "./Contact.css";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import ContactCard from "./ContactCard";


const Contact = () => {
  return (
    <section id="contact">
      <h4>Find Me</h4>
      <div className="contact-container">
        <div className="find-me">
          <div className="links-container">
            <ContactCard link="https://linkedin.com" >
              <FiLinkedin />
            </ContactCard>
            <ContactCard link="https://github.com">
              <FiGithub />
            </ContactCard>
            <ContactCard link="https://facebook.com">
              <FiFacebook />
            </ContactCard>
          </div>
        </div>
        
        <div className="contact-me">
        <ContactCard link="https://linkedin.com" desc="Send me a direct message in facebook messenger">
              <FaFacebookMessenger />
            </ContactCard>
            <ContactCard link="https://github.com">
              <FiGithub />
            </ContactCard>
            <ContactCard link="https://facebook.com">
              <MdMarkEmailUnread />
            </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
