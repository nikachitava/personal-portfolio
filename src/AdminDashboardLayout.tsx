import { Outlet } from "react-router-dom";
import AdminAuthContextProvider from "./context/adminAuthContext";
import AdminActiveMenuContextProvider from "./context/AdminActiveMenuContext";
import ModalContextProvider from "./context/ModalContext";

const AdminDashboardLayout = () => {
	return (
		<ModalContextProvider>
			<AdminAuthContextProvider>
				<AdminActiveMenuContextProvider>
					<Outlet />
				</AdminActiveMenuContextProvider>
			</AdminAuthContextProvider>
		</ModalContextProvider>
	);
};

export default AdminDashboardLayout;
