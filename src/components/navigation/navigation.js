import React from "react";

const Navigation = () => {
  return (
    <nav className='header__navigation'>
      <ul className='navigation'>
        <li className='navigation__item'>
          <a href='./#favorite-coffee' className='navigation__link'>
            Favorite coffee
          </a>
        </li>
        <li className='navigation__item'>
          <a href='./#about' className='navigation__link'>
            About
          </a>
        </li>
        <li className='navigation__item'>
          <a href='./#mobile-app' className='navigation__link'>
            Mobile app
          </a>
        </li>
        <li className='navigation__item'>
          <a href='./#footer' className='navigation__link'>
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
