import React from "react";

import "./TextBox.scss";

const TextBox = ({
  onClick,
  typ = "primary-text secondary-text",
  placeHolder,
  type,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className={`textbox ${typ}`}
        onClick={onClick}
      />
    </>
  );
};

export default TextBox;
