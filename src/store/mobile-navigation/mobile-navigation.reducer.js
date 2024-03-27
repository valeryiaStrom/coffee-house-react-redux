import { SET_IS_OPEN } from "./mobile-navigation.constants";

const initialState = {
  isOpen: false,
};

console.log("mobile navigation initial state:");
console.log(initialState);
console.log("=================");

const mobileNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default mobileNavigationReducer;
