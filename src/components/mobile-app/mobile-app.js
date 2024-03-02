import React from "react";
import Wrapper from "../../base/wrapper/wrapper";
import LinkButton from "../../base/button/button";

const MobileAppButtonContent = ({ iconClassName, text, topText }) => {
  return (
    <>
      <span className={`icon ${iconClassName}`}></span>
      <span className="mobile-app__button-text">
        <span className="mobile-app__button-text_top">{topText}</span>
        {text}
      </span>
    </>
  );
};

const MobileApp = () => {
  return (
    <section className="mobile-app" id="mobile-app">
      <Wrapper cn="mobile-app__wrapper">
        <div className="mobile-app__content">
          <h2>
            <span className="text-accented">Download</span> our apps to start
            ordering
          </h2>
          <p className="mobile-app__description">
            Download the Resource app today and experience the comfort of
            ordering your favorite coffee from wherever you are
          </p>
          <div className="mobile-app__buttons">
            <LinkButton
              cn="mobile-app__button"
              href="https://www.apple.com/app-store/"
              target="_blank"
            >
              <MobileAppButtonContent
                iconClassName="icon_app-store"
                text="App Store"
                topText="Available on the"
              />
            </LinkButton>
            <LinkButton
              cn="mobile-app__button"
              href="https://play.google.com/"
              target="_blank"
            >
              <MobileAppButtonContent
                iconClassName="icon_google-play"
                text="Google Play"
                topText="Available on"
              />
            </LinkButton>
          </div>
        </div>
        <img
          src="./src/assets/images/mobile-app/mobile-screens.png"
          className="mobile-app__image"
          alt=""
        />
      </Wrapper>
    </section>
  );
};

export default MobileApp;
