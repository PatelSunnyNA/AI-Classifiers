import { createContext, useState, useMemo } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: "#3f51b5",
            },
            secondary: {
              main: "#f50057",
            },

          }
        : {
            // palette values for light mode
            primary: {
              main: "#3f51b5",
            },
            secondary: {
              main: "#f50057",
            },
            background: {
              default: "#eceff1",
              paper:"#FFFFFF",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: "4rem",
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 821,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
        "3xl": 1920,
        "4xl": 2560,
        "5xl": 3200,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
   const responsiveTheme = responsiveFontSizes(theme, {
    breakpoints: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    factor: 5,
  });
  return [responsiveTheme, colorMode];
};
