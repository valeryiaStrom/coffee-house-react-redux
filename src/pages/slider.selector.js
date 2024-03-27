import { createSelector } from "reselect";

export const selectSliderState = (state) => state.slider || {};

export const selectGetSlides = createSelector(
  selectSliderState,
  (currentState) => currentState.slides
);
