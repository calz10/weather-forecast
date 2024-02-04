import { combineReducers } from "redux";
import { reducer as user } from "./user";
import { reducer as weather } from "./weather";

export const rootReducer = combineReducers({
  user,
  weather
});
