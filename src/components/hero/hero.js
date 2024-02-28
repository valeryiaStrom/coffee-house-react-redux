import React from "react";
import Wrapper from "../../base/wrapper/wrapper";
import LinkButton from "../../base/button/button";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Wrapper cn="hero__wrapper">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="text-accented">Enjoy</span> premium coffee at our
            charming cafe
          </h1>
          <p className="hero__description">
            With its inviting atmosphere and delicious coffee options, the
            Coffee House Resource is a popular destination for coffee lovers and
            those seeking a warm and inviting space to enjoy their favorite
            beverage.
          </p>
          <div className="hero__button-container">
            <LinkButton cn="hero__button" href="./src/html/menu.html" text="Menu" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
