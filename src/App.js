import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageSwipe from "./components/portfolio"; // Ensure the path is correct
import Page1 from "./components/page1"; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageSwipe/>} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
