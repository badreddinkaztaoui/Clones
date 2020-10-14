import React from "react";
import Header from "./Header/Header";
import SongRow from "./SongRow/SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// Style
import "./Body.scss";

function Body(props) {
  return (
    <div className="body">
      <Header spotify={props.spotify} />
      <div className="body__info">
        <img
          src="https://i.scdn.co/image/78542158649da811009de6311ccdd4e47a713178"
          alt=""
        />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>Listen to Faouzia, Sam Smith And More Others</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List Of Songs */}
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
      </div>
    </div>
  );
}

export default Body;
