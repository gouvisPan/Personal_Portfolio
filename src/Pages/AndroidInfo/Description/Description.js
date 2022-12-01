import React from "react";
import "../AndroidInfo.css";
import { useState } from "react";
import Phase from "./Phase";
const stackArray = ["Modeling", "Architectural design", "Development"];

const Description = () => {
  const [textIsShown, setTextIsShown] = useState(false);

  const contentStr =
    "   This project was developed in the context of my Bachelor's thesis and" +
    " therefore integrates the processes of modeling, architectural designing" +
    " and developing the Android application. Initially I conducted a" +
    " competitive analysis among the most popular related applications," +
    " comparing the final functionality of my application with the one of" +
    " those. Subsequently and throughout the structural modeling the" +
    " application was handled as an actual business project and all the major" +
    " design principles were applied. In particular, I gathered and identified" +
    " the system requirements from which I exported the use case diagram, the" +
    " verbal descriptions of each use case were used in order to complete the" +
    " domain model and subsequently the class diagram of the application." +
    " Throughout the architectural design the MVVM pattern as well as Google’s" +
    " layering scheme proposal were used and analyzed. During the development" +
    " phase, various technologies were utilized, like the IDE Android Studio," +
    " the programming language Kotlin and the markup language XML, some of the" +
    " most popular Android Libraries like Room, Gson, JetBrains-Coroutines as" +
    " well as the remote access tool Firebase.";

  const clickHandler = () => {
    setTextIsShown(!textIsShown);
  };

  return (
    <div className="description">
      {textIsShown ? (
        <div className="details">
          <div className="block p-container">
            <p>{contentStr}</p>
          </div>
          <div className="button-area">
            <button className="switch-button" onClick={clickHandler}>
              Forget it
            </button>
            <a
              className="switch-button"
              href="https://docs.google.com/document/d/1kHzQPo439C9JYSgCghqX3SpXV-CDyd3q/edit?usp=sharing&ouid=117127167572553408452&rtpof=true&sd=true"
              target="blank"
            >
              Check Thesis (in Greek)
            </a>
          </div>
        </div>
      ) : (
        <div className="tech-stack">
          {stackArray.map((phase) => {
            return <Phase p={phase} key={phase} />;
          })}
          <button className="switch-button" onClick={clickHandler}>
            Explain
          </button>
        </div>
      )}
    </div>
  );
};

export default Description;
