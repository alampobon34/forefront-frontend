import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Header1 from "./components/Header/Header1";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import JoinNow from "./pages/JoinNow/JoinNow";
// import Footer from "./components/Footer/Footer.js";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Header1 /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-now" element={<JoinNow />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
