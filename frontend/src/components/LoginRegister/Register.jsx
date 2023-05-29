import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Register() {
  return (
    <>
      <div className="pic">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="title2">Create Your Account</div>
      <input type="text" placeholder="Full Name" className="box" />
      <input type="password" placeholder="Password" className="box1" />
      <input type="text" placeholder="Phone or E-mail" className="box2" />
      <input type="password" placeholder="Confirm Password" className="box3" />
      <div className="date-title">Birthday </div>
      <input type="date" className="date" />
      <div className="rules">
        By signing up, you agree to the
        <a href="/" className="link">
          Terms of Service
        </a>
        and
        <a href="/" className="link">
          Privacy Policy
        </a>
        including
        <a href="/" className="link">
          Cookie Use.
        </a>
        Others will be able to find you by email or phone number when provided.
      </div>
      <button type="submit" className="submit2">
        Sign Up
      </button>
    </>
  );
}

export default Register;
