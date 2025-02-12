import React from "react";
import ReactDOM from "react-dom/client"; // <-- Ensure this is used
import App from "./App";
import "./styles.css";

// Ensure React is mounting to an existing "root" div
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Check your index.html file.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
