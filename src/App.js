import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header1 from "./components/Header/Header1";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Footer from "./components/Footer/Footer.js";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
