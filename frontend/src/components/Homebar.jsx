import React from "react";

function Homebar() {
  return (
    <>
      <div className="top">
        <h3 className="title">Home</h3>
        <div>
          <button className="homebar">For you</button>
          <button className="homebar">Following</button>
        </div>
      </div>
    </>
  );
}

export default Homebar;
