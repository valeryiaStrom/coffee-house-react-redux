import React from "react";
import PropTypes from "prop-types";

const MenuLoadMoreButton = ({ showButton, children }) => {
  return (
    <div
      className={
        showButton
          ? "menu__load-more-button"
          : "menu__load-more-button menu__load-more-button_hidden"
      }
    >
      {children}
    </div>
  );
};

MenuLoadMoreButton.propTypes = {
  showButton: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default MenuLoadMoreButton;
