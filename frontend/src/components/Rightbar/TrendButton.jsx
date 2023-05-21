import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const TrendButton = ({ trendTitle, midText, bottomText }) => {
  return (
    <button className="trend-button">
      <div className="trend-top">{trendTitle}</div>
      <div className="trend-mid"> {midText} </div>
      <div className="trend-bottom"> {bottomText} </div>
      <div className="symbol">
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </button>
  );
};

export default TrendButton;
