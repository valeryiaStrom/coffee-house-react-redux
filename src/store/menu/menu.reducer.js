import {
  GET_MENU_ITEMS,
  GET_MENU_ITEMS_COMPLETED,
  GET_MENU_ITEMS_FAILED,
} from "./menu.constants";

const initialState = {
  isFetching: false,
  data: {},
  error: null,
};

const menuRecuer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case GET_MENU_ITEMS_COMPLETED:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: null,
      };
    case GET_MENU_ITEMS_FAILED:
      return {
        ...state,
        isFetching: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default menuRecuer;
