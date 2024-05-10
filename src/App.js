import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure correct import

import Home from "./components/home";// Adjusted component paths
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import NavBar from "./components/navbar";
import LandingPage from "./components/landingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/navbar" element={<NavBar/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
