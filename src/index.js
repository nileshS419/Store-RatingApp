import React from "react";
import ReactDOM from "react-dom/client"; // React 18 requires this
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance in your app
reportWebVitals();
