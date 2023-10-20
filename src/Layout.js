import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "./img/rahuldeshpande.svg";

const Layout = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const themes = ["green", "white", "blue", "yellow", "pink"];
    const colors = {
      green: "#172713",
      white: "#fff",
      blue: "#003057",
      yellow: "#ffb852",
      pink: "#d94d99",
    };

    const idx = Math.floor(Math.random() * themes.length);
    let newColor = themes[idx];
    setColor(newColor);

    document.body.style.backgroundColor = colors[newColor];
  }, [color]);

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
        <Link to="/">
          <img
            id="logo"
            src={Logo}
            height="37.5px"
            draggable="false"
            user-drag="none"
            alt="Rahul Deshpande Logo"
          />
        </Link>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
