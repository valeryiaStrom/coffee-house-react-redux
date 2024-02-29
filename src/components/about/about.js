import React from "react";
import Wrapper from "../../base/wrapper/wrapper";

const About = () => {
  return (
    <section className="about" id="about">
      <Wrapper>
        <h2 className="about__title">
          Resource is
          <span className="text-accented">
            {" "}
            the perfect and cozy place
          </span>{" "}
          where you can enjoy a variety of hot beverages, relax, catch up with
          friends, or get some work done.
        </h2>
        <div className="about__gallery">
          <div className="about__gallery-col">
            <div className="about__image-wrapper">
              <img
                className="about__image about__image_large"
                src="./src/assets/images/about/about-1.png"
                alt="woman smiling and drinking coffee"
              />
            </div>
            <div className="about__image-wrapper">
              <img
                className="about__image about__image_small"
                src="./src/assets/images/about/about-2.png"
                alt="a cup of coffee"
              />
            </div>
          </div>
          <div className="about__gallery-col">
            <div className="about__image-wrapper">
              <img
                className="about__image about__image_small"
                src="./src/assets/images/about/about-3.png"
                alt="man working and driking coffee"
              />
            </div>
            <div className="about__image-wrapper">
              <img
                className="about__image about__image_large"
                src="./src/assets/images/about/about-4.png"
                alt="happy couple with coffee cups"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
