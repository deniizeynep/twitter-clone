import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./Register.scss";

function Register() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button class="create-button" onClick={toggleModal}>
        Create account
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              {" "}
              <h2>Create your account</h2>{" "}
              <button className="next-modal" onClick={toggleModal}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
