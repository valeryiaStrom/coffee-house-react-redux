import React, { useState } from "react";
import Wrapper from "../../base/wrapper/wrapper";
import Tabs from "../../base/tabs/tabs";
import MenuItems from "../menu-items/menu-items";

const DEFAULT_SELECTED_TAB = "coffee";

const Menu = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_SELECTED_TAB);

  return (
    <section className='menu' id='menu'>
      <Wrapper cn='menu__wrapper'>
        <h2 className='menu__title'>
          Behind each of our cups hides an
          <span className='text-accented'>amazing surprise</span>
        </h2>
        <div className='menu__tabs-wrapper'>
          <Tabs
            cn={"menu__tabs"}
            data={data}
            selectedTab={selectedTab}
            onTabClick={setSelectedTab}
          />
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
