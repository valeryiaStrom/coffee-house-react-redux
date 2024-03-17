import { combineReducers } from "redux";
import menuRecuer from './menu/menu.reducer';

export const rootReducer = combineReducers({
  menu: menuRecuer,
});
