import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { CookiesProvider } from 'react-cookie';
import { store } from './store/app.store';
import "./App.css";
import strabTheme from "./utils/strabTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={strabTheme}>
        <CookiesProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CookiesProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
