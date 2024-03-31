import {
  GET_MENU_PAGE_REQUESTED,
  GET_MENU_PAGE_REQUEST_COMPLETED,
  GET_MENU_PAGE_REQUEST_FAILED,
  SET_SELECTED_CATEGORY,
  SET_LOAD_MORE_BUTTON_CLICKED_FOR_CATEGORY,
} from "./menu.constants";


const initialState = {
  isLoading: false,
  categories: ["coffee", "tea", "dessert"],
  selectedCategory: "coffee",
  isLoadMoreButtonClicked: {
    coffee: false,
    tea: false,
    dessert: false,
  },
  data: [],
  error: null,
};

const menuRecuer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_PAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MENU_PAGE_REQUEST_COMPLETED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case GET_MENU_PAGE_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
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
