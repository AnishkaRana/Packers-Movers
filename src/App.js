import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Project from "./Pages/Project";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
