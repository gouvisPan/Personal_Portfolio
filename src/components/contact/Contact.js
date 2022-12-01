import React, { useEffect } from "react";
import "./Contact.css";
import ContactCards from "./ContactCards";
import MailForm from "./MailForm";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const dispath = useDispatch();
  const { ref, inView } = useInView();

  useEffect(() => {
    dispath(uiActions.toggleContact(inView));
  }, [inView, dispath]);

  return (
    <section id="contact" ref={ref}>
      <h4>Find Me</h4>
      <div className="contact-container">
        <MailForm />
        <ContactCards />
      </div>
    </section>
  );
};

export default Contact;
