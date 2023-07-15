import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import MultipleLoginForm from "./UsernamePage/Username";

import "./Login.scss";

function Login() {
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState("multipleLogin");

  const toggleModal = () => setModal((prev) => !prev);

  const nextStep = () => setStep("login");

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
              {step === "multipleLogin" ? (
                <MultipleLoginForm
                  nextStep={nextStep}
                  toggleModal={toggleModal}
                />
              ) : (
                <LoginForm />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function LoginForm() {
  return <>Login</>;
}

<MultipleLoginForm />;

export default Login;
