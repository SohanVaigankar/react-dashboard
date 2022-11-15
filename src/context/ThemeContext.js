import { createContext, useEffect, useReducer } from "react";

// reducer
import { ThemeReducer } from "./ThemeReducer";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("isDarkModeEnabled")) || false,
};

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  // persisting user selected theme settings
  useEffect(() => {
    localStorage.setItem("isDarkModeEnabled", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkModeEnabled: state.darkMode, dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
