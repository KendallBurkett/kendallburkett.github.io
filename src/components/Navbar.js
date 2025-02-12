import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles.css"; // Ensure styles are applied

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">Kendall Burkett</h1> {/* Centered */}
      <nav>
        <ul className="nav-links">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Résumé</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;