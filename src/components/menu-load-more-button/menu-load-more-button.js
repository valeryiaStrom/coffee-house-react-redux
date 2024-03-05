import React from "react";

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

export default MenuLoadMoreButton;
