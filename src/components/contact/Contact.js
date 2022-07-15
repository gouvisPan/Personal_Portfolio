import React from "react";
import "./Contact.css";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section id="contact">
      <h4>Find Me</h4>
      <div className="contact-container">
        <div className="find-me">
            <ContactCard expand={false}
              link="https://linkedin.com"
              desc="Send me a direct message in facebook messenger"
            >
              <FiLinkedin />
            </ContactCard>
            <ContactCard expand={false}
              link="https://github.com"
              desc="Send me a direct message in facebook messenger"
            >
              <FiGithub />
            </ContactCard>
            <ContactCard expand={false}
              link="https://facebook.com"
              desc="Send me a direct message in facebook messenger"
            >
              <FiFacebook />
            </ContactCard>
          
        </div>

        <div className="contact-me">
          <ContactCard expand={false}
            link="https://linkedin.com"
            desc="Send me a direct message in facebook messenger"
          >
            <FaFacebookMessenger />
          </ContactCard>
          <ContactCard expand={false}
            link="https://github.com"
            desc="Send me a direct message in facebook messenger"
          >
            <IoLogoWhatsapp />
          </ContactCard>
          <ContactCard expand={true}
            link="https://facebook.com"
            desc="Send me a direct message in facebook messenger"
          >
            <MdMarkEmailUnread />
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
