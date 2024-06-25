import { FunctionComponent, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PropType {
  children: ReactNode;
}

const RouteProtection: FunctionComponent<PropType> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RouteProtection;
