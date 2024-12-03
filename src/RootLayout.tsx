import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import BottomTabNav from "./components/BottomTabNav";

const RootLayout = () => {
	return (
		<>
			<section className="relative container space-y-10">
				<NavBar />
				<Outlet />
				<Footer />
				<BottomTabNav />
			</section>
		</>
	);
};

export default RootLayout;
