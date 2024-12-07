import { Outlet } from "react-router-dom";
import AdminAuthContextProvider from "./context/adminAuthContext";
import AdminActiveMenuContextProvider from "./context/AdminActiveMenuContext";

const AdminDashboardLayout = () => {
	return (
		<AdminAuthContextProvider>
			<AdminActiveMenuContextProvider>
				<Outlet />
			</AdminActiveMenuContextProvider>
		</AdminAuthContextProvider>
	);
};

export default AdminDashboardLayout;
