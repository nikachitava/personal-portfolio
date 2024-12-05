import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";

const AdminDashboardLayout = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<section className="min-h-screen flex items-center justify-center">
				<Outlet />
			</section>
		</ThemeProvider>
	);
};

export default AdminDashboardLayout;
