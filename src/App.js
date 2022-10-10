import React, { useState, useEffect } from "react";
import "./App.css";
import { setToLS, getFromLS } from "./utils/storage";

function App() {
  const [color, setColor] = useState("");
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const themes = ["green", "white", "blue", "yellow", "pink"];
    const idx = Math.floor(Math.random() * themes.length);
    const storedColor = getFromLS("color");
    let newColor = themes[idx];

    if (firstRender) {
      if (storedColor) setColor(storedColor);
    } else {
      newColor =
        themes[idx] === storedColor || themes[idx] === color
          ? themes[Math.floor(Math.random() * themes.length)]
          : newColor;
      setColor(newColor);
      setToLS("color", newColor);
    }

    setFirstRender(false);
  }, [firstRender]);

  return (
    <div className={"wrapper " + color}>
      <div className="content">
        <div>
          <h1>
            <span>Rahul</span>
            <span>Deshpande</span>
            <span>CS@GT</span>
          </h1>
        </div>

        <div className="info">
          <p>Hey! I'm Rahul.</p>
          <p>
            I am a graduating third year undergraduate student at the{" "}
            <strong>
              <a href="https://www.gatech.edu/">
                Georgia Institute of Technology
              </a>
            </strong>
            , majoring in Computer Science.
          </p>
          <p>
            I'm fascinated by computer science, journalism, data analytics, and
            what lies at their intersection. I'm passionate about digital
            civics, the environment, and the future of the internet.
          </p>
          <p>
            When I'm not using a computer, I like to write poetry, learn foreign
            languages, shoot photos on film, and play the Indian classical flute
            (the bansuri). Don't hesitate to get in touch :)
          </p>
          <p>Some of my involvements:</p>
          <ul id="nav">
            <li>
              <a href="https://nique.net/author/rahul/">
                Technique Newspaper — Technology Editor
              </a>
            </li>
            <li>
              <a href="https://gatech.campuslabs.com/engage/organization/college-democrats">
                College Democrats — President
              </a>
            </li>
            <li>
              <a href="https://https://www.astronomyclub.gatech.edu/">
                Astronomy Club — Webmaster
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gtwrecktechs/">
                OIT Wreck Tech
              </a>
            </li>
            <li>
              <a href="https://www.cc.gatech.edu/mentoring-program#:~:text=Peer%20mentors%20are%20paired%20together,week%20during%20the%20fall%20semester.">
                CoC CS 1100 Peer Mentor
              </a>
            </li>
            <li>
              <a href="https://twitter.com/aajaatlanta">
                AAJA ATL — Student Coordinator
              </a>
            </li>
          </ul>
          {/* <p>
            See my work <a href="portfolio.html">here.</a>
          </p> */}
        </div>
        <hr />
        <div className="footer">
          &copy; Rahul Deshpande ad infinitum •{" "}
          <a href="https://twitter.com/rsdesh47/">twitter</a>
          {" • "}
          <a href="https://www.linkedin.com/in/rsdeshpa/">linkedin</a>
          {" • "}
          <a href="mailto:rahuldeshpande@gatech.edu">email</a>
        </div>
      </div>
    </div>
  );
}

export default App;
