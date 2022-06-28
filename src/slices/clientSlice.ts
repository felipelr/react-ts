import { createSlice } from "@reduxjs/toolkit";

export interface ClientState {
  client?: Client;
}

export interface Client {
  id: number;
  name: string;
  document: string;
  userId: number;
  gender?: string;
  phone?: string;
  photo?: string;
  dateBirth?: Date;
}

const clientInitialState: ClientState = {};

export const clientSlice = createSlice({
  name: "client",
  initialState: clientInitialState,
  reducers: {
    setClient: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { setClient } = clientSlice.actions;

export default clientSlice.reducer;
