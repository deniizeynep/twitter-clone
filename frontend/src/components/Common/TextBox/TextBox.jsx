import React from "react";

import "./TextBox.scss";

const TextBox = ({
  onClick,
  typ = "primary-text secondary-text danger=text",
  placeHolder,
  type,
  disabled,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className={`textbox ${typ}`}
        onClick={onClick}
        disabled={disabled}
      />
    </>
  );
};

export default TextBox;
