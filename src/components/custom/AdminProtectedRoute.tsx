import { adminAuthContext } from "@/context/adminAuthContext";
import { IProtectedRouteProps } from "@/types/IProtectedRouteProps";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
	const { isAuthenticated } = useContext(adminAuthContext);

	if (!isAuthenticated) {
		return <Navigate to="/admin-auth" replace />;
	}

	return children;
};

export default AdminProtectedRoute;
