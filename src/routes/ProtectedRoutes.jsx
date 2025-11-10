import { Navigate } from "react-router";
import useUserHook from "../hooks/useUserHook";
import Spiner from "../components/Spiner";

const ProtectedRoutes = ({ children }) => {
  const { userloading, user } = useUserHook();
  if (userloading) return <Spiner />;
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
