import AdminAsideMenu from "@/components/custom/AdminAsideMenu";
import { AdminActiveMenuContext } from "@/context/AdminActiveMenuContext";
import ProjectsSection from "@/sections/admin/ProjectsSection";
import SettingsSection from "@/sections/admin/SettingsSection";
import { useContext } from "react";

const HomePageDashboard = () => {
	const { activeMenu } = useContext(AdminActiveMenuContext);

	return (
		<div className="flex h-screen ">
			<div className="w-full lg:w-[450px]">
				<AdminAsideMenu />
			</div>

			<div className="flex-1 overflow-y-auto p-10">
				{activeMenu === "projects" && <ProjectsSection />}
				{activeMenu === "settings" && <SettingsSection />}
			</div>
		</div>
	);
};

export default HomePageDashboard;
