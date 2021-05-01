import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme /* , darkTheme */ } from "./styles/theme";
import Home from "./containers/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
