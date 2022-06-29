import authSlice, { AuthState, fetchLogin, logout } from "./authSlice";

describe("Auth Slice", () => {
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
});
