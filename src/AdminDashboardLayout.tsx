import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";
import AdminAuthContextProvider from "./context/adminAuthContext";

const AdminDashboardLayout = () => {
	return (
		<AdminAuthContextProvider>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<section className="min-h-screen flex items-center justify-center">
					<Outlet />
				</section>
			</ThemeProvider>
		</AdminAuthContextProvider>
	);
};

export default AdminDashboardLayout;
