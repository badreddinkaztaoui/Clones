import * as actionTypes from "./actionTypes";

export const setPlaylistData = (playList) => {
  return {
    type: actionTypes.SET_PLAYLIST,
    playlist: playList,
  };
};

export const setPlaylist = (playList) => {
  return (dispatch) => {
    dispatch(setPlaylistData(playList));
  };
};
