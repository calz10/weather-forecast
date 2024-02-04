import * as user from "./user";
import * as weather from "./weather";

export type {RootState, AppDispatch} from './store'

export const slices = {
  user,
  weather
};
