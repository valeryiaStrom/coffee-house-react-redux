import React from "react";

const MobileNavigation = ({
  isShown,
  offsetTop,
  isMenuLinkActive,
  onNavigationLinksClick,
  onMenuLinkClick,
}) => {
  return (
    <nav
      style={{ top: `${offsetTop - 1}px` }}
      className={
        isShown
          ? "mobile-navigation"
          : "mobile-navigation mobile-navigation_hidden"
      }
      onClick={onNavigationLinksClick}
    >
      <ul className='mobile-navigation__menu'>
        <li className='mobile-navigation__item'>
          <a href='/#favorite-coffee' className='mobile-navigation__link'>
            Favorite coffee
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='/#about' className='mobile-navigation__link'>
            About
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='/#mobile-app' className='mobile-navigation__link'>
            Mobile app
          </a>
        </li>
        <li className='mobile-navigation__item'>
          <a href='#footer' className='mobile-navigation__link'>
            Contact us
          </a>
        </li>
      </ul>
      <a
        onClick={onMenuLinkClick}
        href='/src/pages/menu/menu.html'
        className={
          isMenuLinkActive
            ? "mobile-navigation__item mobile-navigation__link mobile-navigation__menu-link mobile-navigation__item_active"
            : "mobile-navigation__item mobile-navigation__link mobile-navigation__menu-link"
        }
      >
        <span>Menu</span>
        <span className='icon icon_coffee icon_coffee-mobile-menu'></span>
      </a>
    </nav>
  );
};

export default MobileNavigation;
