import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function Login() {
  return (
    <>
      <div className="pic">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="title2">Login in to Twitter</div>
      <input
        type="text"
        placeholder="Phone, email or username"
        className="textbox"
      />
      <input type="password" placeholder="Password" className="textbox2" />
      <button type="submit" className="submit">
        Log in
      </button>
      <a href="/password" className="password">
        Forgot password?
      </a>
      <a href="./register" className="signup">
        Sign up For Twitter
      </a>
    </>
  );
}

export default Login;
