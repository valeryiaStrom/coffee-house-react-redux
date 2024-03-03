import React, { useState } from "react";
import Wrapper from "../../base/wrapper/wrapper";
import Tab from "../../base/tab/tab";
import { prepareTabsData } from "../../utils/helpers/menu-tabs-helper";
import Tabs from "../../base/tabs/tabs";
import MenuItems from '../menu-items/menu-items';
import MenuItem from "../menu-item/menu-item";

const createMenuItems = (productsData) => {
  const menuItems = productsData.map((productData) => {
    const menuItem = <MenuItem props={productData} key={productData.id} />;
    return menuItem;
  });

  return menuItems;
};

const DEFAULT_SELECTED_TAB = 'coffee';

const Menu = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_SELECTED_TAB);
  const tabsData = prepareTabsData(data);

  return (
    <section className='menu' id='menu'>
      <Wrapper cn='menu__wrapper'>
        <h2 className='menu__title'>
          Behind each of our cups hides an
          <span className='text-accented'>amazing surprise</span>
        </h2>
        <div className='menu__tabs-wrapper'>
          <Tabs cn='menu__tabs'>
            {tabsData.map((tabData, i) => {
              const tab = (
                <Tab
                  key={i}
                  category={tabData.category}
                  isActive={selectedTab === tabData.category}
                  tabText={tabData.label}
                  iconCn={tabData.iconClassName}
                  onClick={() => setSelectedTab(tabData.category)}
                />
              );

              return tab;
            })}
          </Tabs>
        </div>
        <MenuItems data={data} selectedCategory={selectedTab}></MenuItems>
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
