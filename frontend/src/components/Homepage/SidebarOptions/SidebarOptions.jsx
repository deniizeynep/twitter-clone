import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFontAwesome,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEllipsis,
  faEnvelope,
  faHashtag,
  faHouseChimneyWindow,
  faListUl,
  faUser,
  fas,
} from "@fortawesome/free-solid-svg-icons";

function SidebarOptions() {
  return (
    <div className="con">
      <div className="left-side">
        <div className="options">
          <div className="twitter-icon">
            <button className="twitter-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faHouseChimneyWindow} />
            </button>
            <button className="icon">Home</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faHashtag} />
            </button>
            <button className="icon"> Explore</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button className="icon">Notifications</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button className="icon">Messages</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faListUl} />
            </button>
            <button className="icon"> Lists</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <button className="icon">Bookmarks</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </button>
            <button className="icon"> Twitter Blue</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="icon">Profile</button>
          </div>
          <div className="icon">
            <button className="icon">
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
            <button className="icon">More</button>
          </div>
          <div>
            <button className="tw-button">Twitter</button>
          </div>
          <div className="profile">
            <button className="pp">
              <div className="pic">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="name">Name</div>
              <div className="pic2">
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
              <div className="username">@user2435</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

library.add(fas, faTwitter, faFontAwesome);

export default SidebarOptions;
