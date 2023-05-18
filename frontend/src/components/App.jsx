import React from "react";
import "./index.css";
import SidebarOptions from "./SidebarOptions";
import Homebar from "./Homebar";
import TweetBox from "./TweetBox";
import TweetFlow from "./TweetFlow/TweetFlow";
import Rightbar from "./Rightbar/Rightbar";

function App() {
  return (
    <div className="container">
      <SidebarOptions />
      <Homebar />
      <TweetBox />
      <TweetFlow />
      <Rightbar />
    </div>
  );
}

export default App;
