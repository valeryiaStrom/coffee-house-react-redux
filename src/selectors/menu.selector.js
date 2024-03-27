import { createSelector } from "reselect";

// export const selectMenuState = (state) => state.menu || {};
export const selectMenuState = (state) => state.menu;

export const selectIsMenuLoading = createSelector(
  selectMenuState,
  (currentState) => currentState.isLoading
);

export const selectGetMenuData = createSelector(
  selectMenuState,
  (currentState) => currentState.data
);

export const selectGetMenuError = createSelector(
  selectMenuState,
  (currentState) => currentState.error
);

export const selectGetCategories = createSelector(
  selectMenuState,
  (currentState) => currentState.categories
);

export const selectGetSelectedCategory = createSelector(
  selectMenuState,
  (currentState) => currentState.selectedCategory
);

export const selectGetProductsByCategory = createSelector(
  [selectGetMenuData, selectGetSelectedCategory],
  (products, selectedCategory) => {
    return products.filter((product) => product.category === selectedCategory);
  }
);

export const selectGetIsLoadMoreButtonClicked = createSelector(
  selectMenuState,
  (currentState) => currentState.isLoadMoreButtonClicked
);
