import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            borderColor: "grey",
            color: "grey",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: "#fff" },
          ".MuiSvgIcon-root": { color: "#ff5722" },
          "&.Mui-focused .MuiSvgIcon-root": {
            color: "#fff",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& fieldset": { borderColor: "#fff" },
          ".MuiSvgIcon-root": { color: "#ff5722" },
          "&.Mui-focused .MuiSvgIcon-root": {
            color: "#fff",
          },
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#ffffff",
      disabled: "#fff",
    },
    secondary: {
      main: "#ff5722",
    },
    background: {
      default: "#111",
      paper: "#424242",
    },
    text: {
      primary: "#fff",
      secondary: "#ff5722",
      disabled: "#ffffff",
    },
    divider: "#ffffff",
  },
});
export default theme;
