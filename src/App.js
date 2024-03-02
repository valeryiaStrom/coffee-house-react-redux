import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/navigation";
import Wrapper from "./base/wrapper/wrapper";
import Logo from "./base/logo/logo";
import MenuNavigationLink from "./base/menu-navigation-link/menu-navigation-link";
import BurgerButton from "./base/burger-button/burger-button";
import MobileNavigation from "./components/mobile-navigation/mobile-navigation";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home-page";
import MenuPage from "./pages/menu/menu-page";

export default function App() {
  return (
    <div className='App'>
      <Header>
        <Wrapper cn='header__wrapper'>
          <Logo></Logo>
          <Navigation />
          <MenuNavigationLink />
          <BurgerButton />
        </Wrapper>
      </Header>
      <MobileNavigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/src/pages/menu/menu.html' element={<MenuPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
