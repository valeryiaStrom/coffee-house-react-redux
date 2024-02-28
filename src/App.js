import React, { Component } from "react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/navigation";
import Wrapper from "./base/wrapper/wrapper";
import Logo from "./base/logo/logo";
import MenuNavigationLink from "./base/menu-navigation-link/menu-navigation-link";
import BurgerButton from "./base/burger-button/burger-button";
import MobileNavigation from "./components/mobile-navigation/mobile-navigation";

import "./styles/app.scss";

export default function App() {
  return (
    <div className="App">
      <Header>
        <Wrapper cn="header__wrapper">
          <Logo></Logo>
          <Navigation />
          <MenuNavigationLink />
          <BurgerButton />
        </Wrapper>
      </Header>
      <MobileNavigation />
      <h1> Hello, World! </h1>
    </div>
  );
}
