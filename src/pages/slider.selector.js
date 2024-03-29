import { createSelector } from "reselect";

export const selectSliderState = (state) => state.slider || {};

export const selectIsLoading = createSelector(
  selectSliderState,
  (currentState) => currentState.isLoading
);

export const selectGetSlides = createSelector(
  selectSliderState,
  (currentState) => currentState.slides
);
