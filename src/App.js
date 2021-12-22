import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  isLoggedInContext,
  themeContext,
} from "./components/screenComponents/Context";
import { darkModeTheme, whiteModetheme } from "./components/styles/theme";
import Home from "./screens/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [me, setMe] = useState({ code: "", user_id: "" });
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <isLoggedInContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, me, setMe }}
    >
      <themeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <ThemeProvider theme={isDarkMode ? darkModeTheme : whiteModetheme}>
          <Home />
        </ThemeProvider>
      </themeContext.Provider>
    </isLoggedInContext.Provider>
  );
};

export default App;
