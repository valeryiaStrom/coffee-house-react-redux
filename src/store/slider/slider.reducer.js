import { GET_SLIDES } from "./slider.constants";

import { slides } from "../../data/slides";

const initialState = {
  slides: slides,
};

console.log("slider initial state:");
console.log(initialState);
console.log("=================");

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDES:
      return {
        ...state,
        slides: slides,
      };
    default:
      return state;
  }
};

export default sliderReducer;
