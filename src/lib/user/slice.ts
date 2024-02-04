import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, User } from "./interface";
import * as thunks from "./thunks";

const initialState: State = {
  user: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => ({
      ...state,
      user: payload,
    }),
  },
  extraReducers(builder) {
    builder.addCase(thunks.logoutThunk.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const reducer = slice.reducer;
export const actions = {
  ...slice.actions,
  ...thunks,
};
