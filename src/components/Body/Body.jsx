import React from "react";
import Header from "./Header/Header";
import { connect } from "react-redux";
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
        <img src={props.discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{props.discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List Of Songs */}
        {props.discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    discover_weekly: state.discover_weekly,
  };
};

export default connect(mapStateToProps)(Body);
