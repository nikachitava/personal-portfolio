import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider";

const AdminDashboardLayout = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<section className="relative container space-y-10">
				<h1>Admin dashboard layout</h1>
				<Outlet />
			</section>
		</ThemeProvider>
	);
};

export default AdminDashboardLayout;
