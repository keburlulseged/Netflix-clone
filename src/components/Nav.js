import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt="logo"
        />

        <img
          className="nav__avatar"
          src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar"
        />
      </div>
      <h1>THis is the Nav</h1>
    </div>
  );
}

export default Nav;
