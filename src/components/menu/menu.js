import React from "react";
import Wrapper from "../../base/wrapper/wrapper";
import Tab from "../../base/tab/tab";
import { products } from "../../data/products";
import { getMenuCategories } from "../../utils/helpers/menu-tabs-helper";
import { getMenuTabsLabels } from "../../utils/helpers/menu-tabs-helper";
import Tabs from "../../base/tabs/tabs";

const createMenuTabs = (products) => {
  const menuCategories = getMenuCategories(products);
  const menuTabsLabels = getMenuTabsLabels(menuCategories);
  const menuTabsIconsClassNamesMap = new Map();
  menuTabsIconsClassNamesMap.set("coffee", "icon_menu-tab-coffee");
  menuTabsIconsClassNamesMap.set("tea", "icon_menu-tab-tea");
  menuTabsIconsClassNamesMap.set("dessert", "icon_menu-tab-dessert");

  const tabs = [];

  menuCategories.forEach((category, i) => {
    const isActive = i === 0;

    const tab = (
      <Tab
        key={category}
        dataId={category}
        isActive={isActive}
        tabText={menuTabsLabels[i]}
        iconCn={menuTabsIconsClassNamesMap.get(category)}
      />
    );

    tabs.push(tab);
  });

  return tabs;
};

const Menu = () => {
  const tabs = createMenuTabs(products);

  return (
    <section className='menu' id='menu'>
      <Wrapper cn='menu__wrapper'>
        <h2 className='menu__title'>
          Behind each of our cups hides an
          <span className='text-accented'>amazing surprise</span>
        </h2>
        <div className='menu__tabs-wrapper'>
          <Tabs cn='menu__tabs' tabs={tabs} />
        </div>
        <div className='menu__items'></div>
        <div className='menu__load-more-button menu__load-more-button_hidden'>
          <button className='load-more-button'>
            <span className='icon icon-load-more'></span>
          </button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Menu;
