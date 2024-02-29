import React from "react";
import Wrapper from "../../base/wrapper/wrapper";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Wrapper cn="footer__wrapper">
        <div className="footer__content">
          <h2 className="footer__title">
            Sip, Savor, Smile.
            <br />
            <span className="text-accented">It’s coffee time!</span>
          </h2>
          <div className="footer__social-links">
            <a
              className="footer__social-link"
              href="https://twitter.com/"
              target="_blank"
            >
              <span className="icon icon_twitter"></span>
            </a>
            <a
              className="footer__social-link"
              href="https://instagram.com/"
              target="_blank"
            >
              <span className="icon icon_instagram"></span>
            </a>
            <a
              className="footer__social-link"
              href="https://facebook.com/"
              target="_blank"
            >
              <span className="icon icon_facebook"></span>
            </a>
          </div>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__contacts-title">Contact us</h3>
          <div className="footer__contacts-links">
            <a
              className="footer__contacts-link"
              href="https://www.google.com/maps/search/8558+Green+Rd.,+LA"
              target="_blank"
            >
              <span className="icon icon_location"></span>
              <span>8558 Green Rd., LA</span>
            </a>
            <a className="footer__contacts-link" href="tel:+1(603)555-0123">
              <span className="icon icon_phone"></span>
              <span>+1 (603) 555-0123</span>
            </a>
            <a className="footer__contacts-link" href="#">
              <span className="icon icon_clock"></span>
              <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
