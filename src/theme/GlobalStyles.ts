import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  html, body, #root {
    height: 100%;
    font-size: 16px;
    overflow-x: hidden;

    h1, h2, h3, h4, h5, h6 {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    h1 {
      font-size: ${({ theme }) => theme.fontSize.title1};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.title2};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.title3};
    }
  }
`;
