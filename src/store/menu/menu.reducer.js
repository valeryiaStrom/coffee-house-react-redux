import {
  GET_MENU_PAGE,
  GET_MENU_PAGE_COMPLETED,
  GET_MENU_PAGE_FAILED,
  SET_SELECTED_CATEGORY,
} from "./menu.constants";

import { products } from "../../data/products";

const initialState = {
  isLoading: true,
  selectedCategory: "coffee",
  data: products,
  shouldShowLoadMoreButton: false,
  error: null,
};

console.log(initialState);

const menuRecuer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_PAGE:
      return {
        ...state,
        data: products,
        isLoading: true,
        error: null,
      };
    case GET_MENU_PAGE_COMPLETED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case GET_MENU_PAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        data: {},
        error: action.payload,
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default menuRecuer;
