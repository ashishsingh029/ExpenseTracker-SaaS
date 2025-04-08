import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "../utils/helper";
const ProtectedRoute = () => {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
