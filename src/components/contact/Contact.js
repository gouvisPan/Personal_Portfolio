import React from "react";
import "./Contact.css";
import ContactCards from "./ContactCards";
import MailForm from "./MailForm";

const Contact = () => {
  return (
    <section id="contact">
      <h4>Find Me</h4>
      <div className="contact-container">
        <MailForm />
        <ContactCards />
      </div>
    </section>
  );
};

export default Contact;
