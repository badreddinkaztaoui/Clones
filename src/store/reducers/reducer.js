import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_PLAYLIST:
      return {
        ...state,
        playlists: action.playlist,
      };
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
