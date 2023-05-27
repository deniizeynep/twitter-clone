import React from "react";
import "./Homepage/index.css";
import SidebarOptions from "./Homepage/SidebarOptions";
import Homebar from "./Homepage/Homebar";
import TweetBox from "./Homepage/TweetBox";
import TweetFlow from "./Homepage/TweetFlow/TweetFlow";
import Rightbar from "./Homepage/Rightbar/Rightbar";

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
