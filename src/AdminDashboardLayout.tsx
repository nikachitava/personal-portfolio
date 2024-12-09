import { Outlet } from "react-router-dom";
import AdminAuthContextProvider from "./context/adminAuthContext";
import AdminActiveMenuContextProvider from "./context/AdminActiveMenuContext";
import ModalContextProvider from "./context/ModalContext";

const AdminDashboardLayout = () => {
	return (
		<AdminAuthContextProvider>
			<ModalContextProvider>
				<AdminActiveMenuContextProvider>
					<Outlet />
				</AdminActiveMenuContextProvider>
			</ModalContextProvider>
		</AdminAuthContextProvider>
	);
};

export default AdminDashboardLayout;
