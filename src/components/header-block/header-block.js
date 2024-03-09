import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Wrapper from "../../base/wrapper/wrapper";
import Logo from "../../base/logo/logo";
import MenuNavigationLink from "../../base/menu-navigation-link/menu-navigation-link";
import BurgerButton from "../../base/burger-button/burger-button";
import MobileNavigation from "../mobile-navigation/mobile-navigation";

const HeaderBlock = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

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
      <MobileNavigation isShown={showMobileNavigation} />
    </>
  );
};

export default HeaderBlock;
