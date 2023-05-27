import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import TrendButton from "./TrendButton";
import FollowButton from "./FollowButton";

function Rightbar() {
  const [trends, setTrends] = React.useState([
    {
      trendTitle: "Trending in Turkey",
      midText: "Trend Topic",
      bottomText: "1,5MN Tweet",
    },
  ]);
  const [follows, setFollows] = React.useState([
    {
      user: "Name",
      username: "@user3254",
    },
  ]);

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
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}

          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}

          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}
          {trends.map((trend) => (
            <TrendButton
              trendTitle={trend.trendTitle}
              midText={trend.midText}
              bottomText={trend.bottomText}
            />
          ))}

          <button className="bottom-bar">Show More</button>
        </div>
        <div className="follow">
          <div className="follow-list-title">Who to follow</div>
          {follows.map((follow) => (
            <FollowButton user={follow.user} username={follow.username} />
          ))}
          {follows.map((follow) => (
            <FollowButton user={follow.user} username={follow.username} />
          ))}
          {follows.map((follow) => (
            <FollowButton user={follow.user} username={follow.username} />
          ))}
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
