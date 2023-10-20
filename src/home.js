import React from "react";
import { portfolioData, positionsData, employmentData } from "./portfolioData";
import PortfolioItem from "./PortfolioItem";
import ResumeItem from "./ResumeItem";

export default (props) => {
  return (
    <>
      <div className="info">
        <p>
          Hey there! I'm Rahul, and I'm a current Computer Science Master's
          student at{" "}
          <strong>
            <a href="https://www.gatech.edu/">Georgia Tech</a>
          </strong>
          , with specialization in Visual Analytics. I also got my BS in CS from
          Georgia Tech in May 2023, with thread picks of Intelligence and
          Modeling and Simulation.
        </p>
        <p>
          I'm fascinated by computer science, journalism, data analytics, and
          what lies at their intersection. I'm passionate about digital civics,
          the environment, and the future of the internet.
        </p>
        <h2>Current and Past Employment</h2>
        {employmentData.map((item) => (
          <ResumeItem item={item} key={item.place} />
        ))}
        <h2>Current and Past Involvements</h2>
        <div className="portfolio-items">
          {positionsData.map((item) => (
            <ResumeItem item={item} key={item.place} />
          ))}
        </div>
        <h2>Past Work</h2>
        <div className="portfolio-items">
          {portfolioData.map((item) => (
            <PortfolioItem item={item} key={item.title} />
          ))}
        </div>
        <h2>Education</h2>
        <p>
          <strong>M.S. Computer Science</strong> Visual Analytics
          <br />
          <small>Georgia Tech | Aug 2023 - Proj. May 2024</small>
        </p>
        <p>
          <strong>B.S. Computer Science</strong> Intelligence and Modeling &
          Simulation
          <br />
          <small>Georgia Tech | Aug 2020 - May 2023</small>
        </p>
      </div>
    </>
  );
};
