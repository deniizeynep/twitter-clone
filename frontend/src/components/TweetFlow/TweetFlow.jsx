import React from "react";
import TextTweet from "./TextTweet";
import ImageTweet from "./ImageTweet";

function TweetFlow() {
  return (
    <>
      <div className="mid">
        <TextTweet
          User="Name"
          Username="@user9382"
          Time="32m"
          TweetParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          hic facere ipsam voluptatem nisi eius omnis iste recusandae optio
          numquam."
        />
        <ImageTweet />
        <TextTweet
          User="Name"
          Username="@user9382"
          Time="32m"
          TweetParagraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          hic facere ipsam voluptatem nisi eius omnis iste recusandae optio
          numquam."
        />
      </div>
    </>
  );
}

export default TweetFlow;
