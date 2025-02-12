import React from "react";
import "./styles.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>

      {/* Display Resume as an Embedded PDF */}
      <iframe
        src="/Kendall_Burkett_Resume.pdf"
        className="resume-pdf"
        title="Kendall Burkett Resume"
      ></iframe>

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