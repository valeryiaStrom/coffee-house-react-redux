import React from "react";

const MenuNavigationLink = ({ isActive, onClick }) => {
  return (
    <a
      href='/src/pages/menu/menu.html'
      className={
        isActive
          ? "navigation__item navigation__item_active header__menu-link"
          : "navigation__item header__menu-link"
      }
      onClick={onClick}
    >
      <span>Menu</span>
      <span className='icon icon_coffee'></span>
    </a>
  );
};

export default MenuNavigationLink;
