import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      contentBackground: string;
    };

    fontFamily: string;

    fontSize: {
      small: string;
      regular: string;
      large: string;
      title3: string;
      title2: string;
      title1: string;
    };

    fontWeight: {
      thin: number;
      light: number;
      regular: number;
      bold: number;
    };
  }
}
