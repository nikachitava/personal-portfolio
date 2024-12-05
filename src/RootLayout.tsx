import { Outlet } from "react-router-dom";
import Footer from "./components/custom/Footer";
import NavBar from "./components/custom/NavBar";
import BottomTabNav from "./components/custom/BottomTabNav";
import { ThemeProvider } from "./context/theme-provider";

const RootLayout = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<section className="relative container space-y-10">
				<NavBar />
				<Outlet />
				<Footer />
				<BottomTabNav />
			</section>
		</ThemeProvider>
	);
};

export default RootLayout;
