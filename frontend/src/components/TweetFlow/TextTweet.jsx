import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faChartSimple,
  faCircleUser,
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";

const TextTweet = ({ User, Username, Time, TweetParagraph }) => {
  return (
    <div className="tweet">
      <button className="user-pp">
        <FontAwesomeIcon icon={faCircleUser} />
      </button>
      <button className="user">{User}</button>
      <button className="username-2">{Username}</button>
      <div className="time">{Time}</div>
      <button className="more">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className="paragraph">{TweetParagraph}</div>
      <button className="bottom-option">
        <button className="icons">
          <FontAwesomeIcon icon={faComment} />
        </button>
        <button className="icons">
          <FontAwesomeIcon icon={faRetweet} />
        </button>
        <button className="icons">
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button className="icons">
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
        <button className="icons">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </button>
      </button>
    </div>
  );
};

export default TextTweet;
