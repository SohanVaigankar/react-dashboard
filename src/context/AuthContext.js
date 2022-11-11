import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

// initialState
const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// auth context
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //   persisting user auth data
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  const value = {
    dispatch,
    currentUser: state.currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
