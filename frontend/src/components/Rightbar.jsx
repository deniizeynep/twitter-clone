import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Rightbar() {
  return (
    <div className="con">
      <div className="right-side">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="search-input"
          />
        </div>
        <div className="trends">
          <div className="trend-title">Trends for you</div>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey</div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">1,5MN Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">1MN Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">500K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">320K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="trend-button">
            <div className="trend-top">Trending In Turkey </div>
            <div className="trend-mid">Trend Topic</div>
            <div className="trend-bottom">210K Tweet</div>
            <div className="symbol">
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </button>
          <button className="bottom-bar">Show More</button>
        </div>
        <div className="follow">
          <div className="follow-list-title">Who to follow</div>
          <button className="follower-button">
            <div className="profile-picture">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="follower-name">Name</div>
            <div className="follower">@user4867</div>
            <button className="follow-button">Follow</button>
          </button>
          <button className="follower-button">
            <div className="profile-picture">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="follower-name">Name</div>
            <div className="follower">@user8756</div>
            <button className="follow-button">Follow</button>
          </button>
          <button className="follower-button">
            <div className="profile-picture">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="follower-name">Name</div>
            <div className="follower">@user2342</div>
            <button className="follow-button">Follow</button>
          </button>
          <button className="bottom-bar">Show More</button>
        </div>
        <div className="right-bottom">
          <a href="/n"> Terms of Service</a>
          <a href="/n">Privacy Policy</a>
          <a href="/n"> Cookie Policy</a>
          <a href="/n"> Imprint</a>
          <a href="/n">Accessibility</a>
          <a href="/n"> Ads info</a>
          <a href="/n">
            More <FontAwesomeIcon icon={faEllipsis} />
          </a>
          <div className="word">© 2023 X Corp.</div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
