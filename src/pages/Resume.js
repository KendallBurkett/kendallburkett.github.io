import React from "react"
import "./styles.css";

function Resume() {
  return (
    <div className="page">
      <h1>Resume</h1>
      <p>Click below to view or download my resume:</p>
      <a href="/Kendall_Burkett_Resume.pdf" target="_blank" rel="noopener

 noreferrer">
        <button>View Resume</button>
      </a>
      <a href="/Kendall_Burkett_Resume.pdf" download>
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;