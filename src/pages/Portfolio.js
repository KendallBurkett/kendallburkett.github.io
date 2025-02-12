import React from "react"
import "./styles.css";

function Portfolio() {
  return (
    <div className="page"> {/* <-- ADDED: Class for styling */}
      <h1>Portfolio</h1>
      <p>Here are some of my completed projects:</p>
      <ul>
        <li><a href="https://github.com/KendallBurkett/UT_Project-4" target="_blank" rel="noopener noreferrer">Stock Performance Analysis</a></li>
        <li><a href="https://github.com/KendallBurkett/UT_Tableau" target="_blank" rel="noopener noreferrer">Tableau NYC Citibike</a></li>
        <li><a href="https://github.com/KendallBurkett/UT_Advanced_SQL" target="_blank" rel="noopener noreferrer">SQL School Performance Analysis</a></li>
      </ul>
    </div>
  );
}

export default Portfolio;