import React from "react";
import "./Home.css";
import Header1 from "../../components/Header/Header1";
import Hero from "../../components/Hero/Hero.js";
import Aboutus from "../../components/About-us/Aboutus";
import MissionVision from "../../components/MissionVision/MissionVision";
import Concern from "../../components/Concern/Concern";
import News from "../../components/News/News";
import JoinNow from "../../components/JoinNow/JoinNow";
import HallOfFame from "../../components/HallOfFame/HallOfFame";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
      <Header1 />
      <Hero />
      <Aboutus />
      <MissionVision />
      <Concern />
      <News />
      <JoinNow />
      <HallOfFame />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
