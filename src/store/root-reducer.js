import { combineReducers } from "redux";
import menuRecuer from "./menu/menu.reducer";
import sliderReducer from "./slider/slider.reducer";

export const rootReducer = combineReducers({
  menu: menuRecuer,
  slider: sliderReducer,
});
