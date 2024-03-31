import {
  GET_SLIDES_REQUESTED,
  GET_SLIDES_REQUEST_COMPLETED,
  GET_SLIDES_REQUEST_FAILED,
} from "./slider.constants";

const initialState = {
  isLoading: false,
  slides: [],
  error: null,
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDES_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SLIDES_REQUEST_COMPLETED:
      return {
        ...state,
        isLoading: false,
        error: null,
        slides: action.payload,
      };
    case GET_SLIDES_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;
