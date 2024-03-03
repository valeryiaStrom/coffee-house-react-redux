import React from "react";
import MainSection from "../../components/main-section/main-section";
import Menu from "../../components/menu/menu";
import { products } from '../../data/products';

const MenuPage = () => {
  return (
    <MainSection>
      <Menu data={products}/>
    </MainSection>
  );
};

export default MenuPage;
