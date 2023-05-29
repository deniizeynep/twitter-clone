import React from "react";
import SidebarOptions from "./SidebarOptions";
import Homebar from "./Homebar";
import TweetBox from "./TweetBox";
import TweetFlow from "./TweetFlow/TweetFlow";
import Rightbar from "./Rightbar/Rightbar";

import "./index.css";

export function Homepage() {
  return (
    <>
      <SidebarOptions />
      <Homebar />
      <TweetBox />
      <TweetFlow />
      <Rightbar />
    </>
  );
}
