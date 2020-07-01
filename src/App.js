import React from "react";
import "./App.css";
import "98.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#39424e",
      }}
    >
      <div className="window-container">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Rahul Deshpande's Website</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close"></button>
            </div>
          </div>

          <div className="window-body">
            <h2>Hi there! I'm Rahul.</h2>
            <p>
              I'll be a freshman at Cal Poly SLO this fall, majoring in Computer Science.
            </p>
            <p>
              I’m fascinated by mathematics, computer science, robotics, and the
              connections between the three.
            </p>
            <p>
              When I’m not using a computer, I like to write poetry, learn
              foreign languages, shoot photos on film, and play the Indian
              classical flute–the bansuri. At a party, you’ll find me talking
              to anyone who’ll lend an ear. Don’t hesitate to get in touch :)
            </p>
            <div className="field-row" style={{ justifyContent: "center" }}>
              <a href="https://github.com/dishpanda">
                <button>GitHub</button>
              </a>
              <a href="https://www.instagram.com/itsrahuldeshpande/">
                <button>Instagram</button>
              </a>
              <a href="mailto:rahulsachindeshpande@gmail.com">
                <button>Email</button>
              </a>
              <a href="https://docs.google.com/document/d/1CTYqEzdmbgkry3Y2jmOsy2FFN2PWWQg7e_4MU_cWY84/edit?usp=sharing">
                <button>Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
