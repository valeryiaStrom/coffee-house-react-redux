import React from "react";
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <nav className="header__navigation">
      <ul className="navigation">
        <li className="navigation__item">
          <HashLink to="./#favorite-coffee" className="navigation__link">
            Favorite coffee
          </HashLink>
        </li>
        <li className="navigation__item">
          <HashLink to="./#about" className="navigation__link">
            About
          </HashLink>
        </li>
        <li className="navigation__item">
          <HashLink to="./#mobile-app" className="navigation__link">
            Mobile app
          </HashLink>
        </li>
        <li className="navigation__item">
          <HashLink to="./#footer" className="navigation__link">
            Contact us
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
