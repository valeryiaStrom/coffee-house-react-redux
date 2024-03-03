import React from "react";
import MenuItem from "../menu-item/menu-item";

const MenuItems = ({ data, selectedCategory }) => {
  const menuItems = [];
  data.forEach((item, i) => {
    if (item.category === selectedCategory) {
      menuItems.push(<MenuItem props={item} key={i} />);
    }
  });

  return <div className='menu__items'>{menuItems}</div>;
};

export default MenuItems;
