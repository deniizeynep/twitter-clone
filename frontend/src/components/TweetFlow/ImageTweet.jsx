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

const ImageTweet = () => {
  return (
    <div className="tweet">
      <button className="user-pp">
        <FontAwesomeIcon icon={faCircleUser} />
      </button>
      <button className="user">Name</button>
      <button className="username-2">@user4732</button>
      <div className="time">32m</div>
      <button className="more">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className="paragraph">What a beautiful view!</div>
      <img
        src="https://2.bp.blogspot.com/-XDX1Vg5hYC0/T2w_qp4T_hI/AAAAAAAABcw/EkIEFDpqMnE/s1600/manzara1.jpg"
        alt="pic"
        className="picture"
      />
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

export default ImageTweet;
