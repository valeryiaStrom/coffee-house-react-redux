import React from "react";

const MobileNavigation = ({ isShown }) => {
  return (
    <nav
      className={
        isShown
          ? "mobile-navigation"
          : "mobile-navigation mobile-navigation_hidden"
      }
    >
      <ul className='mobile-navigation__menu'>
        <li className='mobile-navigation__item'>
          <a href='./#favorite-coffee' className='mobile-navigation__link'>
            Favorite coffee
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='./#about' className='mobile-navigation__link'>
            About
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='./#mobile-app' className='mobile-navigation__link'>
            Mobile app
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='./#footer' className='mobile-navigation__link'>
            Contact us
          </a>
        </li>
      </ul>
      <a
        href='/src/pages/menu/menu.html'
        className='mobile-navigation__item mobile-navigation__link mobile-navigation__menu-link'
      >
        <span>Menu</span>
        <span className='icon icon_coffee icon_coffee-mobile-menu'></span>
      </a>
    </nav>
  );
};

export default MobileNavigation;
