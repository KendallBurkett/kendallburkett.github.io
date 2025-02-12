import React from "react";
import "./styles.css"; // Ensure styles are applied

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p>If you’d like to get in touch, feel free to reach out via email or LinkedIn.</p>

        <div className="contact-links">
          <a href="mailto:kendall.burkett@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/kendallburkett/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kendallburkett" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;