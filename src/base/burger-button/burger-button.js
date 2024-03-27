import React from "react";
import PropTypes from "prop-types";

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

BurgerButton.propTypes = {
  isMobileNavigationExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BurgerButton;
