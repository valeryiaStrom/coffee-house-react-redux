import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderBlock from "./components/header-block/header-block";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home-page";
import MenuPage from "./pages/menu/menu-page";
import MainSection from "./components/main-section/main-section";
import PageNotFound from "./pages/page-not-found/page-not-found";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderBlock />

        <MainSection>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/index.html' element={<HomePage />} />
            <Route path='/src/pages/menu/menu.html' element={<MenuPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </MainSection>

        <Footer />
      </div>
    </Provider>
  );
}
