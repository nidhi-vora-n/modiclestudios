import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import MovingStrips from "../components/MovingStrips/MovingStrips";
import Clients from "./Clients";
import Consulting from "./Consulting";

const Home = () => {
  return (
    <div>
        
      <HeroSection />
      <ServiceSection />
      <Consulting />
      <MovingStrips />
      <Clients />
    </div>
  );
};

export default Home;
