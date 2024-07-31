import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      primary: string;
    },
    typography: {
      family: {
        body: string,
      },
      weight: {
        normal: number,
        medium: number,
        semiBold: number,
        bold: number,
      },
    },
  }
}
