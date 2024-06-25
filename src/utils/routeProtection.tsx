import { Navigate, useLocation } from "react-router-dom";

const RouteProtection = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RouteProtection;
