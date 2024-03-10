import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Wrapper from "../../base/wrapper/wrapper";
import Logo from "../../base/logo/logo";
import MenuNavigationLink from "../../base/menu-navigation-link/menu-navigation-link";
import BurgerButton from "../../base/burger-button/burger-button";
import MobileNavigation from "../mobile-navigation/mobile-navigation";
import { goToUrl } from "../../utils/helpers/common-helper";

const isMenuPage = window.location.href.includes("menu");

const HeaderBlock = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [isMenuLinkActive, setIsMenuLinkActive] = useState(isMenuPage);

  useEffect(() => {
    if (showMobileNavigation) {
      document.body.classList.add("body_unscrollable");
    } else {
      document.body.classList.remove("body_unscrollable");
    }
  }, [showMobileNavigation]);

  const handleBurgerButtonClick = () => {
    setShowMobileNavigation(true);
  };

  const handleCloseMobileNavigationButtonClick = () => {
    setShowMobileNavigation(false);
  };

  const handleNavigationLinksClick = (e) => {
    if (e.target.classList.contains("mobile-navigation__link")) {
      const clickedLinkUrl = e.target.href;
      e.preventDefault();
      setShowMobileNavigation(false);
      goToUrl(clickedLinkUrl);
    }
  };

  const handleMenuLinkClick = (e) => {
    const menuLink = e.target.closest(".mobile-navigation__menu-link");
    e.preventDefault();

    if (!isMenuLinkActive) {
      setShowMobileNavigation(false);
      setIsMenuLinkActive(true);
      goToUrl(menuLink.href);
    }
  };

  return (
    <>
      <Header>
        <Wrapper cn='header__wrapper'>
          <Logo></Logo>
          <Navigation />
          <MenuNavigationLink />
          <BurgerButton
            isMobileNavigationExpanded={showMobileNavigation}
            onClick={
              showMobileNavigation
                ? handleCloseMobileNavigationButtonClick
                : handleBurgerButtonClick
            }
          />
        </Wrapper>
      </Header>
      <MobileNavigation
        isShown={showMobileNavigation}
        isMenuLinkActive={isMenuLinkActive}
        onNavigationLinksClick={handleNavigationLinksClick}
        onMenuLinkClick={handleMenuLinkClick}
      />
    </>
  );
};

export default HeaderBlock;