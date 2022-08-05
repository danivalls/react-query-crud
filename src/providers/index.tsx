import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "theme";

const queryClient = new QueryClient();
const muiTheme = createTheme({
  palette: {
    primary: { main: theme.colors.primary },
    secondary: { main: theme.colors.secondary },
  },
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </MUIThemeProvider>
    </QueryClientProvider>
  );
};
