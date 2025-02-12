import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed to HashRouter for GitHub Pages
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;