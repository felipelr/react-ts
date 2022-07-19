import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../services/axiosApi";
import { Client, setClient } from "./clientSlice";
import { Professional, setProfessional } from "./professionalSlice";

export interface AuthState {
  isAuth: boolean;
  loading: boolean;
  message: string;
  userType?: "professional" | "client";
  token?: string;
  user?: {
    id: number;
    email: string;
  };
}

export interface AuthenticateResult {
  user: {
    id: number;
    email: string;
    role: string;
    client?: Client;
    professional?: Professional;
  };
  token: string;
}

interface AuthenticateReponse {
  email: string;
  password: string;
}

const authInitialState: AuthState = {
  isAuth: false,
  loading: false,
  message: "",
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: AuthenticateReponse,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await axiosApi.post<AuthenticateResult>(
        "/v1/users/login",
        { email, password }
      );

      if (data.user.professional)
        dispatch(setProfessional(data.user.professional));

      if (data.user.client) dispatch(setClient(data.user.client));

      return data;
    } catch (err: any) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth", // `createSlice` will infer the state type from the `initialState` argument
  initialState: authInitialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.loading = false;
      state.user = undefined;
      state.token = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.message = "";
        state.loading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.message = action.payload
          ? (action.payload as string)
          : "Usuário e/ou senha inválidos";
        state.loading = false;
        state.user = undefined;
        state.token = undefined;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.userType = action.payload.user.professional
          ? "professional"
          : "client";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
