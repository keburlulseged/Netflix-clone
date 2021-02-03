import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      class="banner"
      style={{
        backgroundImage: `url('https://static.fabrik.io/y48/f66ad9d41a69dfff.jpeg?auto=format&lossless=1&w=2880&h=5120&fit=max&s=f32527706fed3b78853e114fbb1892e0')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Lupin</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__discription">
          {truncate(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Estlaudantium facere repellendus saepe culpa quaerat fugit? Voluptatemrepudiandae sed, illo eveniet, quas ut sint culpa enim quisperspiciatis, ratione nemo?",
            150
          )}
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
