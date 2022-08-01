import { createTheme } from "@mui/material";
import { strab_blue, strab_yellow, white } from "./colors";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const strabTheme = createTheme({
  palette: {
    primary: {
      main: strab_blue,
      contrastText: strab_yellow,
    },
    secondary: {
      main: strab_yellow,
      contrastText: strab_blue,
    },
    neutral: {
      main: white,
      contrastText: strab_blue,
    },
  },
});

export default strabTheme;
