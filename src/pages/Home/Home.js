import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero.js";
import Aboutus from "../../components/About-us/Aboutus";
import MissionVision from "../../components/MissionVision/MissionVision";
import Concern from "../../components/Concern/Concern";
function Home() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <MissionVision />
      <Concern />
    </div>
  );
}

export default Home;