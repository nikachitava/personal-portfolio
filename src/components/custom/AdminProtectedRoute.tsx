import { IProtectedRouteProps } from "@/types/IProtectedRouteProps";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute: React.FC<IProtectedRouteProps> = ({
	children,
	isAuthenticated,
}) => {
	if (!isAuthenticated) {
		return <Navigate to="/admin-auth" replace />;
	}

	return children;
};

export default AdminProtectedRoute;
