import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import styles from "./Mainpart.css";

import Signup from "../Signup/Signup";

const Mainpart = () => {
  const navigate = useNavigate(); // Initialize navigate

  function handleClick() {
    navigate("/Signup"); // Use navigate instead of changing window location
  }

  return (
    <div className="main-part">
      <div className="main-left">
        <div className="l1">
          New product release <span className="arrow">-&gt;</span>
        </div>
        <div className="l2">
          <h1>
            Build AI Assistant for{" "}
            <span id="dynamic-text">Capturing Leads</span>
          </h1>
        </div>
        <div className="l3">
          <p>
            Boost Sales & Support: Create ChatGPT-Level Chatbots Aligned with
            Your Business Goals, Data and Expertise!
          </p>
        </div>
        <div className="signup-part">
          <div className="signup-for-free">
            <button className="signup-button" onClick={handleClick}>
              Signup for free
            </button>
          </div>
          <div className="learn-more">
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
        <div className="product-part"></div>
      </div>
      <div className="main-right"></div>
    </div>
  );
};

export default Mainpart;
