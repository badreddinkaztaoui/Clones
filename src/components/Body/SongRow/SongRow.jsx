import React from "react";
import "./SongRow.scss";

function SongRow(props) {
  return (
    <div className="song__row">
      <img
        className="song__rowAlbum"
        src={props.track.album.images[0].url}
        alt=""
      />
      <div className="song__rowInfo">
        <h1>{props.track.name}</h1>
        <p>
          {props.track.artists.map((artist) => artist.name).join(", ")}
          {props.track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
