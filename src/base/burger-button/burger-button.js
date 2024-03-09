import React from "react";

const BurgerButton = ({ isMobileNavigationExpanded, onClick }) => {
  return (
    <span
      className={
        isMobileNavigationExpanded
          ? "header__burger-menu-btn burger-menu-btn burger-menu-btn_expanded"
          : "header__burger-menu-btn burger-menu-btn"
      }
      onClick={onClick}
    >
      <span className='burger-menu-btn__line'></span>
    </span>
  );
};

export default BurgerButton;
