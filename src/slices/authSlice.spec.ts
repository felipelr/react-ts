import authSlice, { AuthState, logout } from "./authSlice";

describe("Auth Reducer", () => {
  const state: AuthState = {
    isAuth: false,
    loading: false,
    message: "",
  };

  it("should handle initial state", () => {
    const initialState: AuthState = state;
    const action = { type: "unknown" };
    const expectedState = initialState;
    expect(authSlice(initialState, action)).toEqual(expectedState);
  });

  it("should handle logout", () => {
    const initialState: AuthState = { ...state, isAuth: true };
    const expectedState = state;
    const action = logout();
    expect(authSlice(initialState, action)).toEqual(expectedState);
  });
});
