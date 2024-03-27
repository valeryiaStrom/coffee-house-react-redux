import { GET_SLIDES } from "./slider.constants";

export const getSlides = (payload) => {
  return {
    type: GET_SLIDES,
    payload,
  };
};
