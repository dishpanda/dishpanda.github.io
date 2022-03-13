import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { GrInstagram, GrGithub, GrDocument } from "react-icons/gr";
import { GoMailRead } from "react-icons/go";
import Resume from "./Deshpande_Rahul_BS_2023.pdf";

function App() {
  return (
    <div className="page">
      <div className="flex-container">
        <div className="one">
          <Container>
            <div className="one-body">
              <h3 className="text-uppercase">Hello, I'm</h3>
              <div className="glitch" data-text="Rahul.">
                Rahul.
              </div>
              <p>
                I am a second year student at the{" "}
                <strong>
                  <a style={{ color: "white" }} href="https://www.gatech.edu/">
                    Georgia Institute of Technology
                  </a>
                </strong>
                , majoring in Computer Science 
                {/* with a minor in public policy */}.
              </p>
              <p>
                I’m fascinated by mathematics, computer science, political science, and
                the connections between the three.
              </p>
              <p>
                When I’m not using a computer, I like to write poetry, learn
                foreign languages, shoot photos on film, and play the Indian
                classical flute (the bansuri). At a party, you’ll find me talking
                to anyone who’ll lend an ear. Don’t hesitate to get in touch :)
              </p>
              <p>
                Some of my involvements:
              </p>
              <ul>
                <li>The Technique Newspaper (Technology Editor)</li>
                <li>College Democrats (VP, Logistics and Finance)</li>
                <li>North Ave South Hall Council Officer (Communications Coordinator)</li>
                <li>Astronomy Club (Webmaster)</li>
                {/* <li>Student Government (IT Board member)</li>
                <li>WREK Radio (Operator)</li> */}
              </ul>

              <strong>
                <em>scroll &raquo;</em>
              </strong>
              <footer>
                <a href="mailto:rahuldeshpande@gatech.edu">
                  <GoMailRead />
                </a>{" "}
                <a href="https://instagram.com/itsrahuldeshpande">
                  <GrInstagram />
                </a>{" "}
                <a href="https://github.com/dishpanda">
                  <GrGithub />
                </a>{" "}
                <a
                  style={{ color: "blue" }}
                  href={Resume}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GrDocument />
                </a>{" "}
              </footer>
            </div>
          </Container>
        </div>
        <div className="two">
          <div className="image">
            <img className="object-fit_cover" alt="rahul" src="rahul.png" />
          </div>
        </div>
        {/* <div className="three">
          <div className="three-bg"></div>
          <Container className="">
            <h1 className="mt-5 display-1">Work</h1>
            <ol>
              <li>
                <h4>Cal High Robotics</h4>
                <small className="text text-uppercase">2020-present</small>
                <ul>
                  <li>
                    Team Captain, <em>2016-2020</em>
                  </li>
                  <li>
                    Vice President <em>2018-2019</em>
                  </li>
                  <li>
                    President <em>2019-2020</em>
                  </li>
                  <li>
                    Head Mentor <em>2020-Present</em>
                  </li>
                </ul>
              </li>
              <li>
                <h4>Tutor/TA, Ace Academy</h4>{" "}
                <small className="text text-uppercase">summer 2019</small>
              </li>
              <li>
                <h4>Dev Intern, Fiveable</h4>
                <small className="text text-uppercase">summer 2019</small>
              </li>
            </ol>
          </Container>
        </div>
        <div className="four">
          <Container>
            <Portfolio/>
          </Container>
        </div> */}
      </div>
    </div>
  );
}

export default App;
