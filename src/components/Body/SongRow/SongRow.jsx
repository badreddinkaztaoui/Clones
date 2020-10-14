import React from "react";
import "./SongRow.scss";

function SongRow() {
  return (
    <div className="song__row">
      <img
        className="song__rowAlbum"
        src={
          "https://images.genius.com/ad13f9fed8c302c9ec69e36c1cdc4db7.600x600x1.jpg"
        }
        alt=""
      />
      <div className="song__rowInfo">
        <h1>Track Name</h1>
        <p>Artist Name. Track Album Name</p>
      </div>
    </div>
  );
}

export default SongRow;
