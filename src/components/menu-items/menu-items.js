import React, { useState, useEffect } from "react";
import MenuItem from "../menu-item/menu-item";
import {
  TABLET_SMALL_WIDTH,
  MAX_PRODUCTS_COUNT_TABLET,
} from "../../abstracts/constants/constants";

// const MenuItems = ({ data, selectedCategory, clientWidth }) => {
//   const [menuItemsCount, setMenuItemsCount] = useState(0);

//   useEffect(() => {
//     setMenuItemsCount(menuItems.length);
//     console.log('menu items count: ' + menuItemsCount);
//   });

//   const menuItems = [];
//   data.forEach((item, i) => {
//     if (item.category === selectedCategory) {
//       menuItems.push(<MenuItem props={item} key={i} />);
//     }
//   });

//   if (
//     clientWidth <= TABLET_SMALL_WIDTH &&
//     menuItems.length > MAX_PRODUCTS_COUNT_TABLET
//   ) {
//     menuItems.length = MAX_PRODUCTS_COUNT_TABLET;
//   }
//   return <div className='menu__items'>{menuItems}</div>;
// };

const MenuItems = ({ children, onClick }) => {
  return <div className='menu__items' onClick={onClick}>{children}</div>;
};

export default MenuItems;
