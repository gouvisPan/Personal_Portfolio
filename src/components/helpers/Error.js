import React from "react";
import "./ErrorHandling.css";
import { BiErrorCircle } from "react-icons/bi";
import { useState, useEffect } from "react";

const Error = ({ message }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 4000);

    // To clear or cancel a timer, you call the clearTimeout(); method,
    // passing in the timer object that you created into clearTimeout().

    return () => clearTimeout(timer);
  }, []);

  return (
    alert && (
      <div className="error notification">
        <p>{message}</p>
        <BiErrorCircle className="message-icon" />
      </div>
    )
  );
};

export default Error;
