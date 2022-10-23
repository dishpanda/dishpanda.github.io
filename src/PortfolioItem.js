import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
      <a href={props.item.url}>
        <h3>{props.item.title}</h3>
        <img
          src={props.item.image}
          className="portfolio-img"
          alt={props.item.title}
        />
      </a>
    </div>
  );
};

export default PortfolioItem;
