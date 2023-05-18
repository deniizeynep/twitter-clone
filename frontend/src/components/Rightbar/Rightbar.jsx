import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import TrendButton from "./TrendButton";
import FollowButton from "./FollowButton";

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
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />
          <TrendButton
            TrendTitle="Trending in Turkey"
            MidText="Trend Topic"
            BottomText="1,5MN Tweet"
          />

          <button className="bottom-bar">Show More</button>
        </div>
        <div className="follow">
          <div className="follow-list-title">Who to follow</div>
          <FollowButton User="Name" Username="@user 3456" />
          <FollowButton User="Name" Username="@user 3456" />
          <FollowButton User="Name" Username="@user 3456" />
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
