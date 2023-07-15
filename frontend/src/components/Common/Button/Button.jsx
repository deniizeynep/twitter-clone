import React from "react";

import "./Button.scss";

const Button = ({
  children,
  type = "btn-primary btn-secondary btn-dark",
  onClick,
}) => {
  return (
    <>
      <button className={`btn ${type}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
