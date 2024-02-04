import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectUserState = (state: RootState) => state.user

export const selectCurrentUser = createSelector(selectUserState, state => state.user)