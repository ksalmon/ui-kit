import { ThemeProvider, Global, css, Theme } from "@emotion/react";

export const theme: Theme = {
  colors: {
    black: "rgb(33, 31, 38)",
    primary: "rgb(124, 69, 234)"
  },
  typography: {
    family: {
      body: "'Inter', sans-serif",
    },
    weight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
};

type Props = {
  children: React.ReactNode;
  themeOverride: Theme;
};

export const UIThemeProvider = ({ children, themeOverride }: Props) => (
  <ThemeProvider theme={{ ...theme, ...themeOverride }}>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");

        body {
          font-family: "Inter", sans-serif;
          margin: 0;
        }

        input {
          font-size: 16px;
        }

        p {
          margin: 0;
        }

        .material-symbols-outlined {
          font-size: 16px;
        }
      `}
    />
    {children}
  </ThemeProvider>
);
