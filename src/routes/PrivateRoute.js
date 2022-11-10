import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  //context
  const { isAuthenticated } = useContext(AuthContext);
  return <div>{isAuthenticated ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
