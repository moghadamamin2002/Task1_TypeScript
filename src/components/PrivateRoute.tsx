import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("LOGINED") === "true";

  // If the user is not logged in, redirect to the login page
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
