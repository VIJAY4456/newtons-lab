import React, { useState } from "react";
import axios from "axios";
import styles from "./ChatGPT.css";

// Navbar component
const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#FAFAFA", color: "#fff", padding: "1rem" }}>
      <div className="navbar-element" style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="newton -img">
          <img className="newtonn-img" src="https://app.newtonslab.in/media/site_logos/Logo_without_text-Darl.png" ></img>
        </div>
        <div>Newton</div>
        <div>
          <div style={{ marginRight: "1rem" }}>English</div>
          <div>Profile</div>
        </div>
      </div>
    </nav>
  );
};

<div className="dashoard"></div>

// Sidebar component
const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "1rem", width: "20%" }}>
      <div className="sidebar-element" style={{ marginBottom: "1rem" }}>
        <div>Dashboard</div>
        <div>Chatboat</div>
        <div>Account</div>
        <div>User</div>
        <div>Documentation</div>
      </div>
    </div>
  );
};

export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "1rem", width: "80%" }}>
          <h1 style={{ textAlign: "center" }}>ChatBot</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="prompt">Ask questions</label>
              <input
                id="prompt"
                type="text"
                placeholder="Type your question here..."
                value={prompt}
                onChange={handlePrompt}
              />
            </div>
            <button type="submit" style={{ width: "100%" }}>
              Send
            </button>
          </form>
          <div style={{ backgroundColor: "#333", color: "#fff", marginTop: "1rem", padding: "1rem" }}>
            {response ? response : "Ask me anything..."}
          </div>
        </div>
      </div>
    </div>
  );
}
