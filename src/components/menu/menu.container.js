import React from "react";
import { connect } from "react-redux";
import Menu from "./menu.component";
import {
  selectGetCategories,
  selectGetProductsByCategory,
  selectIsMenuLoading,
  selectGetSelectedCategory,
  selectGetIsLoadMoreButtonClicked,
} from "../../selectors/menu.selector";
import {
  setSelectedCategory,
  setLoadMoreButtonClickedForCategory,
} from "../../store/menu/menu.actions";

const MenuContainer = ({
  categories,
  selectedCategory,
  products,
  isLoading,
  isLoadMoreButtonClickedForCategory,
  setSelectedCategory,
  setLoadMoreButtonClickedForCategory,
}) => {
  return (
    <Menu
      categories={categories}
      selectedCategory={selectedCategory}
      products={products}
      isLoading={isLoading}
      isLoadMoreButtonClickedForCategory={isLoadMoreButtonClickedForCategory}
      setSelectedCategory={setSelectedCategory}
      setLoadMoreButtonClickedForCategory={setLoadMoreButtonClickedForCategory}
    ></Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: selectGetCategories(state),
    selectedCategory: selectGetSelectedCategory(state),
    products: selectGetProductsByCategory(state),
    isLoading: selectIsMenuLoading(state),
    isLoadMoreButtonClickedForCategory: selectGetIsLoadMoreButtonClicked(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedCategory: (category) => dispatch(setSelectedCategory(category)),
    setLoadMoreButtonClickedForCategory: (categories) =>
      dispatch(setLoadMoreButtonClickedForCategory(categories)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
