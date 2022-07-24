import React from "react";
import { useEffect, useState } from "react";

const Delay = (props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsShown(!isShown);
    }, 300);
  }, []);

  return isShown && <div>{props.children}</div>;
};

export default Delay;
