import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./views/About";
import Home from "./views/Home";
import Topics from "./views/Topics";

import HomeHeader from "./components/HomeHeader";

function App() {
  return (
    <Router>
      <div>
        <HomeHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
