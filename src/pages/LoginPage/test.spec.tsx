import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import LoginPage from "./";
import { AuthenticateResult } from "../../slices/authSlice";

const BASE_URL = "https://www.strabbrasil.com/wsdev/api";
export const handlers = [
  rest.post(`${BASE_URL}/users/login`, (req, res, ctx) => {
    const user: AuthenticateResult = {
      token: "any_token",
      user: {
        id: 1,
        email: "user@test.com",
        role: "ADM",
        client: {
          id: 1,
          name: "user",
          document: "123",
          userId: 1,
        },
        professional: {
          id: 1,
          name: "user",
          document: "123",
          userId: 1,
          description: "test",
        },
      },
    };
    return res(ctx.json(user), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

afterAll(() => server.close());
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());

describe("Login Page", () => {
  it("should render", async () => {
    render(<LoginPage />, { route: "/login" });
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  });

  it("should login", async () => {
    render(<LoginPage />, { route: "/login" });
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();

    fireEvent.change(await screen.findByRole("textbox", { name: "Email" }), {
      target: { value: "user@test.com" },
    });
    fireEvent.change(await screen.findByLabelText(/Senha/i), {
      target: { value: "123456" },
    });
    fireEvent.click(await screen.findByText(/Entrar/i));

    await waitFor(async () => {
      expect(await screen.findByText(/Professional Home/i)).toBeInTheDocument();
    });
  });
});
