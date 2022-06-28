import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import clientSlice from "../slices/clientSlice";
import professionalSlice from "../slices/professionalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    client: clientSlice,
    professinal: professionalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
