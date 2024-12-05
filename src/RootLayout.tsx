import { Outlet } from "react-router-dom";
import Footer from "./components/custom/Footer";
import NavBar from "./components/custom/NavBar";
import BottomTabNav from "./components/custom/BottomTabNav";

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
