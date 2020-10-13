// Go To The Authentiation Page
export const authPlace = "https://accounts.spotify.com/authorize";

// Go Back To Our App
export const myAppUri = "http://localhost:3000";

// The Client ID From Spotify Developers API
export const userId = "2fb53848b6a54bc78a3c3ef5c91877f1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialVal, item) => {
      let parts = item.split("=");
      initialVal[parts[0]] = decodeURIComponent(parts[1]);

      return initialVal;
    }, {});
};

export const loginUrl = `${authPlace}?client_id=${userId}&redirect_uri=${myAppUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
