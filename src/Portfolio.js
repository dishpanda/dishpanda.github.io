import React from "react";
import { portfolioData } from "./portfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="info">
      <p>This is a collection of some of the things I've made.</p>
      <p>
        You can find a list of the articles I've written for the Technique{" "}
        <a href="https://nique.net/author/rahul/">here</a>.
      </p>
      <p>
        Below are some of the graphics and visualizations I've created to
        support articles written by others:
      </p>
      <div className="portfolio-items">
        {portfolioData.map((item) => (
          <PortfolioItem item={item} />
        ))}
      </div>
      {/* <p>
        And finally, here are some of the projects I've made for school as well
        as my freelance work.
      </p> */}
    </div>
  );
};

export default Portfolio;
