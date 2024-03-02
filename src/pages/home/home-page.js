import React from "react";
import MainSection from "../../components/main-section/main-section";
import Hero from "../../components/hero/hero";
import FavoriteCoffee from "../../components/favorite-coffee/favorite-coffee";
import About from "../../components/about/about";
import MobileApp from "../../components/mobile-app/mobile-app";

const HomePage = () => {
  return (
    <MainSection>
      <Hero />
      <FavoriteCoffee />
      <About />
      <MobileApp />
    </MainSection>
  );
};

export default HomePage;
