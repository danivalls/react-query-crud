import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </ThemeProvider>
      </MUIThemeProvider>
    </QueryClientProvider>
  );
};
