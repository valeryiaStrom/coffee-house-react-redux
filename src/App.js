import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderBlock from "./components/header-block/header-block";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home-page";
import MenuPage from "./pages/menu/menu-page";
import MainSection from "./components/main-section/main-section";
import { slides } from "./data/slides";
import { products } from "./data/products";

export default function App() {
  return (
    <div>
      <HeaderBlock />

      <MainSection>
        <Routes>
          <Route path='/' element={<HomePage data={slides} />} />
          <Route
            path='/src/pages/menu/menu.html'
            element={<MenuPage data={products} />}
          />
        </Routes>
      </MainSection>

      <Footer />
    </div>
  );
}
