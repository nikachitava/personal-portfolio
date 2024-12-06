import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import AdminAuthContextProvider from "./context/adminAuthContext";

const AdminDashboardLayout = () => {
	return (
		<AdminAuthContextProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<section>
					<Outlet />
				</section>
			</ThemeProvider>
		</AdminAuthContextProvider>
	);
};

export default AdminDashboardLayout;
