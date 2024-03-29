import React from "react";
import PropTypes from "prop-types";

const MenuItems = ({ children, onClick }) => {
  return (
    <div className='menu__items' onClick={onClick}>
      {children}
    </div>
  );
};

MenuItems.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default MenuItems;
