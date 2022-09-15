import React, { useContext } from "react";
import { AuthContext } from "../../services/auth.context";
import FullScreenProgress from "../Spinners/FullScreenProgress";
import { Navigate, Outlet } from "react-router-dom";

type PropTypes = {
  children?: React.ReactNode;
  redirectPath?: string;
  authPage?: boolean;
};

const ProtectedRoute = ({
  redirectPath = "/login",
  children,
  authPage = true,
}: PropTypes) => {
  const auth = useContext(AuthContext);
  while (auth?.isLoading === true) {
    return <FullScreenProgress></FullScreenProgress>;
  }
  if (authPage ? !auth?.authUser?.access_token : auth?.authUser?.access_token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
