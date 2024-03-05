import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../../base/wrapper/wrapper";
import Tabs from "../../base/tabs/tabs";
import MenuItems from "../menu-items/menu-items";
import { getClientWidth } from "../../utils/helpers/common-helper";
import LoadMoreButton from "../load-more-button/load-more-button";
import {
  TABLET_SMALL_WIDTH,
  MAX_PRODUCTS_COUNT_TABLET,
} from "../../abstracts/constants/constants";
import MenuLoadMoreButton from "../menu-load-more-button/menu-load-more-button";
import Tab from "../../base/tab/tab";
import { prepareTabsData } from "../../utils/helpers/menu-tabs-helper";
import MenuItem from "../menu-item/menu-item";

const DEFAULT_SELECTED_TAB = "coffee";

const Menu = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(DEFAULT_SELECTED_TAB);
  const [clientWidth, setClientWidth] = useState(getClientWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("resizing");
      const clientWidth = getClientWidth();
      setClientWidth(clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createTabs = (data) => {
    const tabsData = prepareTabsData(data);
    const tabs = [];

    tabsData.forEach((tab, i) => {
      tabs.push(
        <Tab
          key={i}
          category={tab.category}
          isActive={selectedTab === tab.category}
          tabText={tab.label}
          iconCn={tab.iconClassName}
          onClick={(e) => {
            setSelectedTab(e.target.closest(".tab").getAttribute("data-id"));
          }}
        />
      );
    });

    return tabs;
  };

  const createMenuItems = (data) => {
    console.log("creating menu items");
    const menuItems = [];
    data.forEach((item, i) => {
      if (item.category === selectedTab) {
        menuItems.push(<MenuItem props={item} key={i} />);
      }
    });
    console.log(
      "when creating menu items clientw width was: " + clientWidth + "px"
    );

    if (
      clientWidth <= TABLET_SMALL_WIDTH &&
      menuItems.length > MAX_PRODUCTS_COUNT_TABLET
    ) {
      menuItems.length = MAX_PRODUCTS_COUNT_TABLET;
    }

    console.log("the number of menu items should be: " + menuItems.length);
    return menuItems;
  };

  const shouldShowLoadMoreButton = (data) => {
    const menuItems = [];
    data.forEach((item, i) => {
      if (item.category === selectedTab) {
        menuItems.push(item);
      }
    });

    console.log(
      "when deciding whether Load More Btn should be shown, client width was: " +
        clientWidth +
        "px"
    );
    console.log(
      "when deciding whether Load More Btn should be shown, the intended number of menu items was : " +
        menuItems.length
    );

    if (
      menuItems.length > MAX_PRODUCTS_COUNT_TABLET &&
      clientWidth <= TABLET_SMALL_WIDTH
    ) {
      console.log("Load More Btn should be shown");
      return true;
    }

    console.log("Load More Btn should NOT be shown");
    return false;
  };

  const tabs = createTabs(data);
  const menuItems = createMenuItems(data);
  const showLoadMoreButton = shouldShowLoadMoreButton(data);

  return (
    <section className='menu' id='menu'>
      <Wrapper cn='menu__wrapper'>
        <h2 className='menu__title'>
          Behind each of our cups hides an
          <span className='text-accented'>amazing surprise</span>
        </h2>
        <div className='menu__tabs-wrapper'>
          <Tabs cn={"menu__tabs"}>{tabs}</Tabs>
        </div>
        <MenuItems>{menuItems}</MenuItems>
        <MenuLoadMoreButton showButton={showLoadMoreButton}>
          <LoadMoreButton />
        </MenuLoadMoreButton>
      </Wrapper>
    </section>
  );
};

export default Menu;
