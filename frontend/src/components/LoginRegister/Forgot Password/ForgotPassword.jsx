import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./ForgotPassword.scss";

function ForgotPassword() {
  return (
    <>
      <div className="pic3">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="title2">Forgot Password?</div>
      <div className="bar">Please enter your email or phone number</div>
      <input type="text" placeholder="Phone or E-mail" className="textbox2" />
      <button type="submit" className="submit">
        Send a Code
      </button>
    </>
  );
}

export default ForgotPassword;
