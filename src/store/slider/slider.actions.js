import {
  GET_SLIDES_REQUESTED,
  GET_SLIDES_REQUEST_COMPLETED,
  GET_SLIDES_REQUEST_FAILED,
} from "./slider.constants";

import { slides } from "../../data/slides";

export const getSlides = (payload) => {
  return (dispatch) => {
    dispatch(getSlidesRequested());

    setTimeout(() => {
      dispatch(getSlidesRequestCompleted(slides));
    }, 3000);
  };
};

const getSlidesRequested = () => {
  return {
    type: GET_SLIDES_REQUESTED,
  };
};

const getSlidesRequestCompleted = (slides) => {
  return {
    type: GET_SLIDES_REQUEST_COMPLETED,
    payload: slides,
  };
};

const getSlidesRequestFailed = (error) => {
  return {
    type: GET_SLIDES_REQUEST_FAILED,
    payload: error,
  };
};
