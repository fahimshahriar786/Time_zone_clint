
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";



const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user } = useAuth();
  if(!user.displayName){
    return <Navigate to="/register" state={{from:location}} replace/>;
  }
  return children;
  
};

export default PrivateRoute;
