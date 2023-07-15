import React from "react";

import TextBox from "../../../Common/TextBox/TextBox";
import Button from "../../../Common/Button/Button";
import "./Password.scss";

function LoginForm(toggleModal) {
  return (
    <>
      <h1 className="title">Enter your password</h1>
      <TextBox
        typ="secondary-text"
        placeHolder="Username"
        type="text"
        disabled="disabled"
      />
      <TextBox typ="danger-text" placeHolder="Password" type="password" />
      <a href="./" className="forgot-link">
        Forgot password?
      </a>
      <Button type="btn-light" onClick={toggleModal}>
        Log in
      </Button>
      <div className="sign-up-links">
        Don't have an account?{" "}
        <a href="./" className="link">
          Sign Up
        </a>
      </div>
    </>
  );
}

export default LoginForm;
