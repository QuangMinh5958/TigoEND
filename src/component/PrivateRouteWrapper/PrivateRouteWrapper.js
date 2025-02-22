// import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LayoutLogin from "../../Layout/LayoutLogin/LayoutLogin";

const PrivateRouteWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <LayoutLogin /> : children;
};

export default PrivateRouteWrapper;
