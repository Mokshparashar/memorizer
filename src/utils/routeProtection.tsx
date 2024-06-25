import { FunctionComponent, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PropType {
  children: ReactNode;
}

const RouteProtection: FunctionComponent<PropType> = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  // const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RouteProtection;
