import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const FollowButton = ({ User, Username }) => {
  return (
    <button className="follower-button">
      <div className="profile-picture">
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <div className="follower-name">{User}</div>
      <div className="follower">{Username} </div>
      <button className="follow-button">Follow</button>
    </button>
  );
};

export default FollowButton;
