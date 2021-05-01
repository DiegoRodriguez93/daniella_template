import React from "react";

import { ThemeProvider } from "@material-ui/core";
import { theme /* , darkTheme */ } from "./styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./containers/Home";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
