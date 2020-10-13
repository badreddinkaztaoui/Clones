import React from "react";
import { loginUrl } from "../spotify.dtb";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img
          src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify.png"
          alt=""
        />
      </div>
      <a href={loginUrl} className="link">
        Login With Spotify
      </a>
    </div>
  );
};

export default Login;
