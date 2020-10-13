import * as actionTypes from "./actionTypes";

export const setTokenData = (token) => {
  return {
    type: actionTypes.SET_TOKEN,
    token: token,
  };
};

export const setToken = (token) => {
  return (dispatch) => {
    dispatch(setTokenData(token));
  };
};

export const setUserData = (user) => {
  return {
    type: actionTypes.SET_USER,
    user: user,
  };
};

export const setUser = (user) => {
  return (dispatch) => {
    dispatch(setUserData(user));
  };
};

export const setDiscoverWeekly = (discover_weekly) => {
  return {
    type: actionTypes.SET_DISCOVER_WEEKLY,
    discover_weekly: discover_weekly,
  };
};
