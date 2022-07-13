import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const HeaderContacts = () => {
  return (
    <div className="header_contacts">
      <a href="https://linkedin.com" target="_blank">
        <FiLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FiGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderContacts;
