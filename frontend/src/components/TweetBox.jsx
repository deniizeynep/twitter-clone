import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleUser,
  faFaceSmile,
  faGift,
  faImage,
  faList,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function TweetBox() {
  return (
    <>
      <div class="comment">
        <button className="box-pp">
          <FontAwesomeIcon icon={faCircleUser} />
        </button>
        <input
          type="text"
          className="placeholder"
          placeholder="What is happening!?"
        />
        <div className="options-2">
          <button className="option">
            <FontAwesomeIcon icon={faImage} />
          </button>
          <button className="option">
            <FontAwesomeIcon icon={faGift} />
          </button>
          <button className="option">
            <FontAwesomeIcon icon={faList} />
          </button>
          <button className="option">
            <FontAwesomeIcon icon={faFaceSmile} />
          </button>
          <button className="option">
            <FontAwesomeIcon icon={faCalendar} />
          </button>
          <button className="option">
            <FontAwesomeIcon icon={faLocationDot} />
          </button>
        </div>
        <button className="push-button">Tweet</button>
      </div>
    </>
  );
}

export default TweetBox;
