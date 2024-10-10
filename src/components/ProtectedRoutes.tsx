import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children }: any) => {
  const isLoggedIn = localStorage.getItem("token") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
  }

  return children ? children : Outlet;
};

export default ProtectedRoutes;
