import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { store } from './store/app.store';
import "./App.css";
import strabTheme from "./utils/strabTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={strabTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
