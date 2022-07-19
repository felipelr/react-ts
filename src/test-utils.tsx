import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { store } from './store/app.store';
import AppRoutes from "./routes/AppRoutes";
import strabTheme from "./utils/strabTheme";

const customRender = (ui: React.ReactElement, options = { route: "/" }) => {
    window.history.pushState({}, 'Test page', options.route)

    return render(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) =>
            <Provider store={store}>
                <ThemeProvider theme={strabTheme}>
                    <BrowserRouter>
                        <AppRoutes>{children}</AppRoutes>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>,
        ...options,
    });
}

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };