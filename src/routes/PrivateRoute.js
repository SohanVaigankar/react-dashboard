import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  //context
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
