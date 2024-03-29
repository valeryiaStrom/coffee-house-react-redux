import {
  GET_MENU_PAGE_REQUESTED,
  GET_MENU_PAGE_REQUEST_COMPLETED,
  GET_MENU_PAGE_REQUEST_FAILED,
  SET_SELECTED_CATEGORY,
  SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY,
} from "./menu.constants";

import { products } from "../../data/products";

// export const getMenuPage = () => {
//   return (dispatch) => {
//     dispatch(getMenuPageRequested());

//     setTimeout(() => {
//       dispatch(getMenuPageRequestCompleted(products));
//     }, 3000);
//   };
// };

export const getMenuPageRequested = () => {
  return {
    type: GET_MENU_PAGE_REQUESTED,
  };
};

export const getMenuPageRequestCompleted = (payload) => {
  return {
    type: GET_MENU_PAGE_REQUEST_COMPLETED,
    payload,
  };
};

export const getMenuPageRequestFailed = (payload) => {
  return {
    type: GET_MENU_PAGE_REQUEST_FAILED,
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
