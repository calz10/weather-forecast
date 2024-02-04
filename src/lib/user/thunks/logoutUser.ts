import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";

export const logoutThunk = createAsyncThunk("user/logout-thunk", async () =>
  signOut()
);
