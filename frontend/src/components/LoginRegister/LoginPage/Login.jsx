import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Login.scss";

function Login() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button class="sign-in-button" onClick={toggleModal}>
        Sign in
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <button className="close" onClick={toggleModal}>
                X
              </button>
              <FontAwesomeIcon icon={faTwitter} className="login-icon" />
              <h2 className="login-title">Sign in to Twitter</h2>{" "}
              <input
                type="text"
                placeholder="Phone, email or username"
                className="login-textbox"
              />
              <button className="next-modal" onClick={toggleModal}>
                Next
              </button>
              <button className="forgot-modal" onClick={toggleModal}>
                Forgot Password?
              </button>
              <div className="sign-up-link">
                Don't have an account?{" "}
                <a href="./" className="link">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
