import React, { Component } from "react";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify.dtb";
import { connect } from "react-redux";
import * as actions from "./store/actions/dispatch";
import SpotifyWebApi from "spotify-web-api-js";
const spotify = new SpotifyWebApi();

class App extends Component {
  // Run Code Based On Given Condition
  componentDidMount() {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      this.props.setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        this.props.setUser(user);
      });

      spotify.getUserPlaylists().then((playlist) => {
        this.props.setPlaylist(playlist);
      });

      spotify.getPlaylist("37i9dQZF1E387pAMk28Hcs").then((res) => {
        this.props.setDiscoverWeekly(res);
      });
    }
  }

  render() {
    let appBody = <Login />;

    if (this.props.token) {
      appBody = <Player spotify={spotify} />;
    }

    return <div className="App">{appBody}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(actions.setToken(token)),
    setUser: (user) => dispatch(actions.setUser(user)),
    setPlaylist: (playlist) => dispatch(actions.setPlaylist(playlist)),
    setDiscoverWeekly: (discover_weekly) =>
      dispatch(actions.setDiscoverWeekly(discover_weekly)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
