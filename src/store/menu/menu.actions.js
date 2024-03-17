import {
  GET_MENU_ITEMS,
  GET_MENU_ITEMS_COMPLETED,
  GET_MENU_ITEMS_FAILED,
} from "./menu.constants";

export const getMenuItems = (payload) => {
  return {
    type: GET_MENU_ITEMS,
    payload,
  };
};

export const getMenuItemsCompleted = (payload) => {
  return {
    type: GET_MENU_ITEMS_COMPLETED,
    payload,
  };
};

export const getMenuItemsFailed = (payload) => {
  return {
    type: GET_MENU_ITEMS_FAILED,
    payload,
  };
};
