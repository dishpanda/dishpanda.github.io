import React from "react";

const ResumeItem = (props) => {
  return (
    <div className={`portfolio-item ${props.item.current ? "current" : ""}`}>
      <p>
        <strong>{props.item.place}</strong>
      </p>
      {props.item.positions.map((element) => {
        return (
          <div key={element.title}>
            {element.title} <br />
            <small>
              {element.startDate} - {element.endDate}
            </small>
            <br />
            <ul>
              {element.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeItem;
