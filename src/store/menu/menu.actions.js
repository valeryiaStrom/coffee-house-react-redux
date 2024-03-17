import {
  GET_MENU_PAGE,
  GET_MENU_PAGE_COMPLETED,
  GET_MENU_PAGE_FAILED,
  SET_SELECTED_CATEGORY,
} from "./menu.constants";

export const getMenuPage = (payload) => {
  console.log("action");
  return {
    type: GET_MENU_PAGE,
    payload,
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