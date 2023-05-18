import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const TrendButton = ({ TrendTitle, MidText, BottomText }) => {
  return (
    <button className="trend-button">
      <div className="trend-top">{TrendTitle}</div>
      <div className="trend-mid"> {MidText} </div>
      <div className="trend-bottom"> {BottomText} </div>
      <div className="symbol">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </button>
  );
};

export default TrendButton;
