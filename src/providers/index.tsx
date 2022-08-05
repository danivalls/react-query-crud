import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const queryClient = new QueryClient();
const muiTheme = createTheme({
  palette: {
    primary: { main: theme.colors.primary },
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
