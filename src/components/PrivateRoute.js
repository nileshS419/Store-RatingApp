import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
  const { user } = useContext(AuthContext);

  console.log("🔑 PrivateRoute: User ->", user); // Debugging

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
