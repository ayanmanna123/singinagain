import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Quize from "./components/Quize";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>  {/* ✅ Wrap inside BrowserRouter */}
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/home" element={<Page />} /> */}
      <Route path="/quize" element={<Quize />} />
    </Routes>
  </Router>
);
