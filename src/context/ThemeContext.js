import { createContext, useReducer } from "react";

// reducer
import { ThemeReducer } from "./ThemeReducer";

const initialState = { darkMode: true };

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider
      value={{ isDarkModeEnabled: state.darkMode, dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
