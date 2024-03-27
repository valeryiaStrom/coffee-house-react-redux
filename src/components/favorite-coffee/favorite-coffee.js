import React from "react";
import Wrapper from "../../base/wrapper/wrapper";
import SliderContainer from "../slider/slider.container";

const FavoriteCoffee = () => {
  return (
    <section className='favorite-coffee' id='favorite-coffee'>
      <Wrapper cn='favorite-coffee__wrapper'>
        <h2 className='favorite-coffee__title'>
          Choose your <span className='text-accented'>favorite</span> coffee
        </h2>

        <SliderContainer />
      </Wrapper>
    </section>
  );
};

export default FavoriteCoffee;
