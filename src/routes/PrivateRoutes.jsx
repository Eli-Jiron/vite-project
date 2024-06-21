import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const sessionId = sessionStorage.getItem("sessionId") || null;

  if (sessionId) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
