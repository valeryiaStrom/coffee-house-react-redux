import React from "react";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__carousel">
        <span
          className="slider__arrow slider__arrow_left"
          onClick={() => console.log("left")}
        >
          <span className="icon slider__arrow-icon slider__arrow-icon_left"></span>
        </span>
        <ul className="slider__slides">
          <li className="slide slide_active">
            <div className="slide__content">
              <img
                src="./src/assets/images/favorite-coffee/coffee-slider-1.png"
                alt=""
                className="slide__image"
              />
              <div className="slide__text">
                <h3 className="slide__title">S’mores Frappuccino</h3>
                <p className="slide__description">
                  This new drink takes an espresso and mixes it with brown sugar
                  and cinnamon before being topped with oat milk.
                </p>
                <h3 className="slide__price">$5.50</h3>
              </div>
            </div>
          </li>
          <li className="slide">
            <div className="slide__content">
              <img
                src="./src/assets/images/favorite-coffee/coffee-slider-2.png"
                alt=""
                className="slide__image"
              />
              <div className="slide__text">
                <h3 className="slide__title">Caramel Macchiato</h3>
                <p className="slide__description">
                  Fragrant and unique classic espresso with rich caramel-peanut
                  syrup, with cream under whipped thick foam.
                </p>
                <h3 className="slide__price">$5.00</h3>
              </div>
            </div>
          </li>
          <li className="slide">
            <div className="slide__content">
              <img
                src="./src/assets/images/favorite-coffee/coffee-slider-3.png"
                alt=""
                className="slide__image"
              />
              <div className="slide__text">
                <h3 className="slide__title">Ice coffee</h3>
                <p className="slide__description">
                  A popular summer drink that tones and invigorates. Prepared
                  from coffee, milk and ice.
                </p>
                <h3 className="slide__price">$4.50</h3>
              </div>
            </div>
          </li>
        </ul>
        <span
          className="slider__arrow slider__arrow_right"
          onClick={() => console.log("right")}
        >
          <span className="icon slider__arrow-icon slider__arrow-icon_right"></span>
        </span>
      </div>
      <div className="slider__controls">
        <div className="controls">
          <span className="control control_active">
            <span className="control__inner"></span>
          </span>
          <span className="control">
            <span className="control__inner"></span>
          </span>
          <span className="control">
            <span className="control__inner"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
