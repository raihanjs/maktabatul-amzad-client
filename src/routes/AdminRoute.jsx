import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  if (user?.email !== "maktabatulamzad@gmail.com") {
    return <Navigate to="/allbooks"></Navigate>;
  }

  return children;
};

export default AdminRoute;
