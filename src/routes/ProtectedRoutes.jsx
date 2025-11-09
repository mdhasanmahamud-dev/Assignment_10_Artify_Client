import { Navigate } from "react-router";
import useUserHook from "../hooks/useUserHook";

const ProtectedRoutes = ({ children }) => {
  const { userloading, user } = useUserHook();
  if (userloading) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Loading...
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
