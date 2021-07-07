import React from "react";
import "./Dash.css";
import dash from "./dash.svg";
const Dash = () => {
  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <a href="#">
            <img src={dash} className="poster" />
          </a>
        </div>
        <div className="container">
          <div className="content">
            <h4 className="title">Name Of Candidate</h4>
            <p className="description">Description About Candidate</p>

            <button className="vote-btn">Vote</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dash;
