import React from "react";
import "./styles.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>

      {/* Display Resume as an Image */}
      <img src="/Kendall_Burkett_Resume.png" alt="Kendall Burkett Resume" className="resume-image" />

      {/* Download Link for PDF */}
      <p>
        <a href="/Kendall_Burkett_Resume.pdf" download="Kendall_Burkett_Resume.pdf" className="download-link">
          Click to Download PDF
        </a>
      </p>
    </div>
  );
}

export default Resume;