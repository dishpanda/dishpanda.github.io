import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <>
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
          what lies at their intersection. I'm passionate about digital civics,
          the environment, and the future of the internet.
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
            <a href="https://www.instagram.com/gtwrecktechs/">OIT Wreck Tech</a>
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
        <p>
          See my work <Link to="portfolio">here</Link>.
        </p>
      </div>
    </>
  );
};
