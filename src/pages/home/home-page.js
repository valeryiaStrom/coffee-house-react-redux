import React from "react";
import Hero from "../../components/hero/hero";
import FavoriteCoffee from "../../components/favorite-coffee/favorite-coffee";
import About from "../../components/about/about";
import MobileApp from "../../components/mobile-app/mobile-app";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FavoriteCoffee />
      <About />
      <MobileApp />
    </>
  );
};

export default HomePage;
