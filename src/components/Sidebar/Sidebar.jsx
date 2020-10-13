import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOptions from "./SidbarOptions/SidebarOptions";
import { connect } from "react-redux";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://cdn.freebiesupply.com/logos/large/2x/spotify-1-logo-black-and-white.png"
        alt=""
      />
      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Seach" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__hr">playlists</strong>
      <hr />

      {props.playlist?.items?.map((item) => {
        return <SidebarOptions key={item.id} title={item.name} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    playlist: state.playlists,
  };
};

export default connect(mapStateToProps)(Sidebar);
