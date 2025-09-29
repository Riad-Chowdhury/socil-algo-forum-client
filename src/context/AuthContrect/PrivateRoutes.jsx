import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../../Pages/Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
