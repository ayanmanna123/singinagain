import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>  {/* ✅ Wrap inside BrowserRouter */}
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);
