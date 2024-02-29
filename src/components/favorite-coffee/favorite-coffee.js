import React from "react";
import Wrapper from "../../base/wrapper/wrapper";
import Slider from "../slider/slider";

const FavoriteCoffee = () => {
  return (
    <section className="favorite-coffee" id="favorite-coffee">
      <Wrapper cn="favorite-coffee__wrapper">
        <h2 className="favorite-coffee__title">
          Choose your <span className="text-accented">favorite</span> coffee
        </h2>

        <Slider/>

      </Wrapper>
    </section>
  );
};

export default FavoriteCoffee;
