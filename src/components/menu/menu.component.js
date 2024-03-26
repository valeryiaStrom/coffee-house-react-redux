import React, { useState, useEffect } from "react";
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
import {
  getDataItemById,
  prepareProductData,
} from "../../utils/helpers/menu-modal-helper";
import MenuItemModal from "../menu-item-modal/menu-item-modal";

const Menu = ({
  categories,
  selectedCategory,
  products,
  isLoading,
  setSelectedCategory,
}) => {
  const [clientWidth, setClientWidth] = useState(getClientWidth);
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false);
  const [clickedMenuItemId, setClickedMenuItemId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TODO: сделать чтобы load more btn состояние не ресетилось, если бзер кликнул кнопку, потом сходил на другую табу,
  // а потом вернулся обратно


  // if load more button was clicked for that tab then setLoadMoreButtonClicked(true)

  console.log(loadMoreButtonClicked)

  useEffect(() => {
    const handleResize = () => {
      const clientWidth = getClientWidth();
      setClientWidth(clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector(".header").classList.remove("header_sticky");
      document.body.classList.add("body_unscrollable");
    } else {
      document.querySelector(".header").classList.add("header_sticky");
      document.body.classList.remove("body_unscrollable");
    }
  }, [isModalOpen]);

  const createTabs = (categories) => {
    const tabsData = prepareTabsData(categories);
    const tabs = [];

    tabsData.forEach((tab) => {
      tabs.push(
        <Tab
          key={tab.category}
          id={tab.category}
          isActive={tab.category === selectedCategory}
          tabText={tab.label}
          iconCn={tab.iconClassName}
        />
      );
    });

    return tabs;
  };

  const handleMenuTabClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = clickedTab.getAttribute("data-id");
      setSelectedCategory(clickedTabId);
      setLoadMoreButtonClicked(false);
    }
  };

  const createMenuItems = (products) => {
    const menuItems = [];
    products.forEach((item, i) => {
      menuItems.push(<MenuItem props={item} key={i} />);
    });

    if (
      clientWidth <= TABLET_SMALL_WIDTH &&
      menuItems.length > MAX_PRODUCTS_COUNT_TABLET &&
      !loadMoreButtonClicked
    ) {
      menuItems.length = MAX_PRODUCTS_COUNT_TABLET;
    }

    return menuItems;
  };

  const shouldShowLoadMoreButton = (products) => {
    if (
      products.length > MAX_PRODUCTS_COUNT_TABLET &&
      clientWidth <= TABLET_SMALL_WIDTH &&
      !loadMoreButtonClicked
    ) {
      return true;
    }

    return false;
  };

  const handleLoadMoreButtonClick = () => {
    console.log("load more clicked");
    setLoadMoreButtonClicked(true);
  };

  const createModalWindow = (data) => {
    // get modal data by clicked menu item id
    const productData = getDataItemById(data, clickedMenuItemId);

    // prepare data for modal window
    const preparedProductData = prepareProductData(productData);

    // create modal
    const modal = (
      <MenuItemModal data={preparedProductData} isOpen={setIsModalOpen} />
    );

    return modal;
  };

  const handleMenuItemClick = (e) => {
    if (e.target.closest(".menu__item")) {
      const clickedMenuItem = e.target.closest(".menu__item");
      const clickedMenuItemId = clickedMenuItem.getAttribute("data-id");
      setClickedMenuItemId(clickedMenuItemId);
      setIsModalOpen(true);
    }
  };

  const tabs = createTabs(categories);
  const menuItems = createMenuItems(products);
  const showLoadMoreButton = shouldShowLoadMoreButton(products);

  return (
    <section className='menu' id='menu'>
      <Wrapper cn='menu__wrapper'>
        <h2 className='menu__title'>
          Behind each of our cups hides an
          <span className='text-accented'> amazing surprise</span>
        </h2>
        <div className='menu__tabs-wrapper'>
          <Tabs cn={"menu__tabs"} onTabClick={handleMenuTabClick}>
            {tabs}
          </Tabs>
        </div>
        {isLoading ? "hello" : "bye"}
        <MenuItems onClick={handleMenuItemClick}>{menuItems}</MenuItems>
        <MenuLoadMoreButton showButton={showLoadMoreButton}>
          <LoadMoreButton onButtonClick={handleLoadMoreButtonClick} />
        </MenuLoadMoreButton>
      </Wrapper>
      {isModalOpen && createModalWindow(products)}
    </section>
  );
};

export default Menu;
