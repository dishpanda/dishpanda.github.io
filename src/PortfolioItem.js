import React from "react";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item">
      <a href={props.item.url}>
        {/* <img
          src={props.item.image}
          className="portfolio-img"
          alt={props.item.title}
        /> */}
        <p>{props.item.title}</p>
      </a>
      <p>{props.item.description}</p>
    </div>
  );
};

export default PortfolioItem;
