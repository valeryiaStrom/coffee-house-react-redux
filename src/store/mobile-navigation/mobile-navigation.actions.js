import { SET_IS_OPEN } from "./mobile-navigation.constants";

export const setIsOpen = (payload) => {
  return {
    type: SET_IS_OPEN,
    payload,
  };
};
