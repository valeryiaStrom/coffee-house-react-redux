import { createSelector } from "reselect";

export const selectMenuState = (state) => state.menu || {};

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

export const selectGetMenuProductsCategories = createSelector(
  selectGetMenuData,
  (products) => {
    const categories = products.map(({ category }) => category);
    const uniqueCategories = Array.from(new Set(categories));
    return uniqueCategories;
  }
);

// const selectGetTabsData = createSelector(
//   selectMenuState,
//   (currentState) => currentState
// );
