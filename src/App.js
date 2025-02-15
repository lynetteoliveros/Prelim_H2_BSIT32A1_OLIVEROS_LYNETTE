import "./styles.css";
import React from "react";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
      </header>

      <Navbar />

      <div className="container mt-5">
        <h1>About Me</h1>
        <div className="columns">
          <div className="column">
            <h2>Education</h2>
            <p>I graduated from Mother Perpetua Parochial School (MPPS).</p>
          </div>

          <div className="column">
            <h2>Skills</h2>
            <ul>
              <li>Communication Skills</li>
              <li>Leadership</li>
              <li>Multi-tasking</li>
            </ul>
          </div>

          <div className="column">
            <h2>Background</h2>
            <p>Only Child, like to explore and to discover new stuff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
