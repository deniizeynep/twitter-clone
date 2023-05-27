import React, { useState } from "react";
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

const TextTweet = ({ user, username, date, text }) => {
  return (
    <div className="tweet">
      <button className="user-pp">
        <FontAwesomeIcon icon={faCircleUser} />
      </button>
      <button className="user">{user}</button>
      <button className="username-2">{username}</button>
      <div className="time">{date}</div>
      <button className="more">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className="paragraph">{text}</div>
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
