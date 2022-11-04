import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <div className="main-container">
      <h1> Functionality</h1>
      <div className="initial-use">
        <h3>Initial use - on registration</h3>
        <ul>
          <li>
            User inputs various biometrical data as well as his goals and
            preferences{" "}
          </li>
          <li>The App creates a personalized workout plan for the user</li>
          <li>User inserts further profile information</li>
        </ul>
      </div>
      <div className="normal-use">
        <h3>Everyday use</h3>
        <h5>Working-out Activity</h5>
        <ul>
          <li>
            The App is guiding the user throughout the workout by providing the
            optimal performance numbers for each set.
          </li>
          <li>The User logs his actual performance</li>
          <li>
            Upon finishing the workout user inputs his perception of difficulity
            on the workout (evaluating pump, DOMS and exhaustion)
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
