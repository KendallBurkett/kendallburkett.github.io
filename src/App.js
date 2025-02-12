import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"; // Added Resume
import Contact from "./pages/Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} /> {/* New Resume Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;