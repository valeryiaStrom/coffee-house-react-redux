import React from "react";
import { connect } from "react-redux";
import Menu from "./menu.component";
import {
  selectGetCategories,
  selectGetProductsByCategory,
  selectIsMenuLoading,
  selectGetSelectedCategory,
} from "../../selectors/menu.selector";
import { setSelectedCategory } from "../../store/menu/menu.actions";

const MenuContainer = ({
  categories,
  selectedCategory,
  products,
  isLoading,
  setSelectedCategory,
}) => {
  return (
    <Menu
      categories={categories}
      selectedCategory={selectedCategory}
      products={products}
      isLoading={isLoading}
      setSelectedCategory={setSelectedCategory}
    ></Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: selectGetCategories(state),
    selectedCategory: selectGetSelectedCategory(state),
    products: selectGetProductsByCategory(state),
    isLoading: selectIsMenuLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCategory: (category) => dispatch(setSelectedCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
