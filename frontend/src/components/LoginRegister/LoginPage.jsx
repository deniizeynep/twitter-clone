import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGear, faHashtag } from "@fortawesome/free-solid-svg-icons";
import TextTweet from "../Homepage/TweetFlow/TextTweet";
import ImageTweet from "../Homepage/TweetFlow/ImageTweet";
import "./index.css";

function LoginPage() {
  const [tweets, setTweets] = React.useState([
    {
      name: "Name",
      username: "@user9382",
      time: Date.now(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatem ut ad consequatur, inventore assumenda autem fuga aperiam corporis placeat nihil sint, beatae excepturi odio nam suscipit! Cumque, architecto aliquid.",
    },
  ]);
  return (
    <div className="container2">
      <div className="option">
        <button className="twitter-icon2">
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button className="icon-left">
          <FontAwesomeIcon icon={faHashtag} />
        </button>
        <button className="icon-left">Explore</button>
        <button className="icon-left">
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button className="icon-left">Settings</button>
      </div>
      <div className="flow">
        <div className="login-title">Explore</div>
        <button className="icon-left">
          <FontAwesomeIcon icon={faGear} />
        </button>
        {tweets.map((tweet) => (
          <TextTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
        {tweets.map((tweet) => (
          <TextTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
        {tweets.map((tweet) => (
          <TextTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
        {tweets.map((tweet) => (
          <ImageTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
        {tweets.map((tweet) => (
          <TextTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
      </div>
      <div className="login">aa</div>
    </div>
  );
}

export default LoginPage;
