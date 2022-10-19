import React from "react";
import "./ErrorHandling.css";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Success = ({ message }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    alert && (
      <div className="success notification">
        <p>{message}</p>
        <IoCheckmarkDoneCircleOutline className="message-icon" />
      </div>
    )
  );
};

export default Success;
