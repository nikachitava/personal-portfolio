import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const RootLayout = () => {
	return (
		<section className="container">
			<NavBar />
			<Outlet />
			<Footer />
		</section>
	);
};

export default RootLayout;
