import React from "react";

import TextBox from "../../../Common/TextBox/TextBox";
import Button from "../../../Common/Button/Button";
import "./Username.scss";

function MultipleLoginForm({ nextStep, toggleModal }) {
  return (
    <>
      <h2 className="login-title">Sign in to Twitter</h2>
      <TextBox
        placeHolder="Phone, email or username"
        type="text"
        typ="primary-text"
      />
      <div className="buttons">
        <Button type="btn-secondary" onClick={nextStep}>
          Next
        </Button>
        <Button type="btn-dark" onClick={toggleModal}>
          Forgot Password
        </Button>
      </div>
      <div className="sign-up-link">
        Don't have an account?{" "}
        <a href="./" className="link">
          Sign Up
        </a>
      </div>
    </>
  );
}

export default MultipleLoginForm;
