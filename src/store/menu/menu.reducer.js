import {
  GET_MENU_PAGE,
  GET_MENU_PAGE_COMPLETED,
  GET_MENU_PAGE_FAILED,
  SET_SELECTED_CATEGORY,
  SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY,
} from "./menu.constants";

import { products } from "../../data/products";

const initialState = {
  isLoading: true,
  categories: ["coffee", "tea", "dessert"],
  selectedCategory: "coffee",
  isLoadMoreButtonClicked: {
    coffee: false,
    tea: false,
    dessert: false,
  },
  data: products,
  error: null,
};

console.log('menu page initial state:')
console.log(initialState);
console.log('=================')

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

    case SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY:
      return {
        ...state,
        isLoadMoreButtonClicked: action.payload,
      };
    default:
      return state;
  }
};

export default menuRecuer;
