import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      <div className="info">
        <h2>404: Page not found!</h2>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  );
};

export default NoPage;
