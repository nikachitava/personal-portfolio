import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const RootLayout = () => {
	return (
		<section>
			<NavBar />
			<Outlet />
		</section>
	);
};

export default RootLayout;
