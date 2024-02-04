import { createSlice } from "@reduxjs/toolkit";
import { State } from "./interface";
import * as thunks from "./thunks";

const initialState: State = {
  currentCityWeather: null,
};

const slice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      thunks.findWeatherByCityNameThunk.fulfilled,
      (state, { payload }) => {
        state.currentCityWeather = payload;
      }
    );
  },
});

export const reducer = slice.reducer;
export const actions = {
  ...slice.actions,
  ...thunks,
};
