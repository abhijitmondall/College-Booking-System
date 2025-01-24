import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

function PrivateRoutes({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace />;
}

export default PrivateRoutes;
