import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="page">
      <div className="flex-container">
        <div className="left">
          <Container>
            <div className="left-body">
              <h3 className="text-uppercase">Hello, I'm</h3>
              <div class="glitch" data-text="Rahul.">
                Rahul.
              </div>
              <p>
                I'll be a freshman at{" "}
                <strong>Georgia Institute of Technology</strong> this fall,
                majoring in Computer Science.
              </p>
              <p>
                I’m fascinated by mathematics, computer science, robotics, and
                the connections between the three.
              </p>
              <p>
                When I’m not using a computer, I like to write poetry, learn
                foreign languages, shoot photos on film, and play the Indian
                classical flute–the bansuri. At a party, you’ll find me talking
                to anyone who’ll lend an ear. Don’t hesitate to get in touch :)
              </p>
              <strong>
                <em>scroll &raquo;</em>
              </strong>
              <footer>
                <a href="mailto:rahulsachindeshpande@gmail.com"> email </a>
                <a href="https://instagram.com/itsrahuldeshpande"> insta </a>
                <a href="https://github.com/dishpanda"> github </a>
              </footer>
            </div>
          </Container>
        </div>
        <div className="right">
          <div class="image">
            <img class="object-fit_cover" alt="rahul" src="rahul.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
