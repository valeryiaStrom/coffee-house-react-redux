import React, { useState, useEffect, useRef } from "react";
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
  const [headerHeight, setHeaderHeight] = useState();

  const headerRef = useRef(null);

  useEffect(() => {
    if (showMobileNavigation) {
      document.body.classList.add("body_unscrollable");
    } else {
      document.body.classList.remove("body_unscrollable");
    }
  }, [showMobileNavigation]);

  useEffect(() => {
    if (showMobileNavigation) {
      const headerHeight = headerRef.current.offsetHeight;
      setHeaderHeight(headerHeight);
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
    // for mobile menu link
    if (e.target.closest(".mobile-navigation__menu-link")) {
      const menuLink = e.target.closest(".mobile-navigation__menu-link");
      e.preventDefault();

      if (!isMenuLinkActive) {
        setShowMobileNavigation(false);
        setIsMenuLinkActive(true);
        goToUrl(menuLink.href);
      }
    } else {
      // for desktop menu link
      if (!isMenuLinkActive) {
        setIsMenuLinkActive(true);
      } else {
        e.preventDefault();
      }
    }
  };

  return (
    <>
      <Header ref={headerRef}>
        <Wrapper cn='header__wrapper'>
          <Logo></Logo>
          <Navigation />
          <MenuNavigationLink
            isActive={isMenuLinkActive}
            onClick={handleMenuLinkClick}
          />
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
        offsetTop={headerHeight}
        isMenuLinkActive={isMenuLinkActive}
        onNavigationLinksClick={handleNavigationLinksClick}
        onMenuLinkClick={handleMenuLinkClick}
      />
    </>
  );
};

export default HeaderBlock;
