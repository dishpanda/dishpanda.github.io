import React from "react";
import "./App.css";
import "98.css";

function App() {
  return (
    <div className="site-container">
      <div className="window-container">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Rahul Deshpande's Website</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <h2>Hi there! I'm Rahul.</h2>
            <p>
              I'll be a freshman at Cal Poly SLO this fall, majoring in Computer
              Science.
            </p>
            <p>
              I’m fascinated by mathematics, computer science, robotics, and the
              connections between the three.
            </p>
            <p>
              When I’m not using a computer, I like to write poetry, learn
              foreign languages, shoot photos on film, and play the Indian
              classical flute–the bansuri. At a party, you’ll find me talking to
              anyone who’ll lend an ear. Don’t hesitate to get in touch :)
            </p>
            <div className="field-row footer" style={{ justifyContent: "center" }}>
              <a href="https://github.com/dishpanda">
                <button>GitHub</button>
              </a>
              <a href="https://www.instagram.com/itsrahuldeshpande/">
                <button>Instagram</button>
              </a>
              <a href="mailto:rahulsachindeshpande@gmail.com">
                <button>Email</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
