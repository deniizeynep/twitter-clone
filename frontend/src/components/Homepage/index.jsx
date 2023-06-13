import React from "react";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import Homebar from "./Homebar/Homebar";
import TweetBox from "./TweetBox/TweetBox";
import TweetFlow from "./TweetFlow/TweetFlow";
import Rightbar from "./Rightbar/Rightbar";

import "./Homebar/Homebar.scss";
import "./Rightbar/Rightbar.scss";
import "./SidebarOptions/SidebarOptions.scss";
import "./TweetBox/TweetBox.scss";
import "./TweetFlow/TweetFlow.scss";

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
