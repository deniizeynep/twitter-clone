import React from "react";
import picture from "../images/tw-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Register from "../RegisterPage/Register";
import Login from "../LoginPage/Login";

import "./Authentication.scss";

function Authentication() {
  return (
    <>
      <img src={picture} alt="" />

      <div className="group">
        <div className="tw-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <h1 className="baslik">Happening now</h1>
        <h3 className="baslik-2">Join Twitter today.</h3>
        <div className="cookie">
          <Register />
          By signing up, you agree to the{" "}
          <a href="./" className="link">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="./" className="link">
            Privacy Policy,
          </a>{" "}
          including{" "}
          <a href="./" className="link">
            Cookie Use.
          </a>{" "}
        </div>
        <h3 className="signup-title">Already have an account?</h3>
        <Login />
      </div>

      <div className="links">
        <a href="./" className="link-2">
          About{" "}
        </a>
        <a href="./" className="link-2">
          Help Center{" "}
        </a>
        <a href="./" className="link-2">
          Terms of Service
        </a>
        <a href="./" className="link-2">
          Privacy Policy
        </a>
        <a href="./" className="link-2">
          Cookie Policy
        </a>
        <a href="./" className="link-2">
          Imprint
        </a>
        <a href="./" className="link-2">
          Accessibility
        </a>
        <a href="./" className="link-2">
          Ads info
        </a>
        <a href="./" className="link-2">
          Blog
        </a>
        <a href="./" className="link-2">
          Status
        </a>
        <a href="./" className="link-2">
          Careers
        </a>
        <a href="./" className="link-2">
          Brand Resources
        </a>
        <a href="./" className="link-2">
          Advertising
        </a>
        <a href="./" className="link-2">
          Marketing
        </a>
        <a href="./" className="link-2">
          Twitter for Business
        </a>
        <a href="./" className="link-2">
          Developers
        </a>
        <a href="./" className="link-2">
          Directory
        </a>
        <a href="./" className="link-2">
          Settings
        </a>
        <a href="./" className="link-2">
          © 2023 X Corp.
        </a>
      </div>
    </>
  );
}

export default Authentication;
