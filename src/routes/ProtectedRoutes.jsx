import { Navigate, useLocation } from "react-router";
import useUserHook from "../hooks/useUserHook";
import Spiner from "../components/Spiner";

const ProtectedRoutes = ({ children }) => {
  const { userloading, user } = useUserHook();
  const location = useLocation();
  if (userloading) return <Spiner />;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoutes;
