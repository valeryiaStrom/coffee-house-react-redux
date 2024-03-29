import {
  GET_MENU_PAGE,
  GET_MENU_PAGE_COMPLETED,
  GET_MENU_PAGE_FAILED,
  SET_SELECTED_CATEGORY,
  SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY,
} from "./menu.constants";

import { products } from "../../data/products";

export const getMenuPage = () => {
  // return {
  //   type: GET_MENU_PAGE,
  //   payload,
  // };

  return (dispatch) => {
    dispatch({
      type: GET_MENU_PAGE,
    });

    setTimeout(() => {
      dispatch({
        type: GET_MENU_PAGE_COMPLETED,
        payload: products,
      })
    }, 3000)
  };
};

export const getMenuPageCompleted = (payload) => {
  return {
    type: GET_MENU_PAGE_COMPLETED,
    payload,
  };
};

export const getMenuPageFailed = (payload) => {
  return {
    type: GET_MENU_PAGE_FAILED,
    payload,
  };
};

export const setSelectedCategory = (payload) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload,
  };
};

export const setLoadMoreButtonClickedForCategory = (payload) => {
  return {
    type: SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY,
    payload,
  };
};
