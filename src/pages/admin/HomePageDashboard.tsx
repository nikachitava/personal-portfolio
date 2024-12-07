import AdminAsideMenu from "@/components/custom/AdminAsideMenu";
import { AdminActiveMenuContext } from "@/context/AdminActiveMenuContext";
import { useContext } from "react";

const HomePageDashboard = () => {
	const { activeMenu } = useContext(AdminActiveMenuContext);

	return (
		<main className="flex gap-4">
			<AdminAsideMenu />
			<h1>{activeMenu}</h1>
		</main>
	);
};

export default HomePageDashboard;
