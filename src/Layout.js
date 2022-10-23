import { Outlet, Link, useLocation } from "react-router-dom";
import { setToLS, getFromLS } from "./utils/storage";
import React, { useState, useEffect } from "react";

const Layout = () => {
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

  let location = useLocation();

  return (
    <div
      className={
        "wrapper " +
        color +
        (location.pathname.slice(1) === "portfolio" ? " portfolio" : "")
      }
    >
      <div className="content">
        <div>
          <Link to="/">
            <h1>
              <span>Rahul</span>
              <span>Deshpande</span>
              <span>CS@GT</span>
            </h1>
          </Link>
        </div>

        <Outlet />

        <hr />
        <div className="footer">
          &copy; Rahul Deshpande{" • "}
          <a href="https://twitter.com/rsdesh47/">twitter</a>
          {" • "}
          <a href="https://www.linkedin.com/in/rsdeshpa/">linkedin</a>
          {" • "}
          <a href="mailto:rahuldeshpande@gatech.edu">email</a>
          {" • "}
          <Link to="/">home</Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
