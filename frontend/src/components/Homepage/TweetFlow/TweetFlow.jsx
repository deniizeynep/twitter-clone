import React from "react";
import TextTweet from "./TextTweet";
import ImageTweet from "./ImageTweet";

function TweetFlow() {
  const [tweets, setTweets] = React.useState([
    {
      name: "Name",
      username: "@user9382",
      time: Date.now(),
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptatem ut ad consequatur, inventore assumenda autem fuga aperiam corporis placeat nihil sint, beatae excepturi odio nam suscipit! Cumque, architecto aliquid.",
    },
  ]);
  return (
    <>
      <div className="mid overflow-x">
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
          <ImageTweet
            user={tweet.name}
            username={tweet.username}
            date={tweet.date}
            text={tweet.text}
          />
        ))}
      </div>
    </>
  );
}

export default TweetFlow;
