import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// initialState
const initialState = {
  isAuthenticated: true,
  currentUser: null,
};

// auth context
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const value = {
    dispatch,
    isAuthenticated: state.isAuthenticated,
    currentUser: state.currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
