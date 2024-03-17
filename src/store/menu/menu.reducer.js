import {
  GET_MENU_PAGE,
  GET_MENU_PAGE_COMPLETED,
  GET_MENU_PAGE_FAILED,
} from "./menu.constants";

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

const menuRecuer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_PAGE:
      return {
        ...state,
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
    default:
      return state;
  }
};

export default menuRecuer;
