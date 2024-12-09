import { IoBriefcaseOutline } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

import { IoSettingsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { IoMdExit } from "react-icons/io";

import { useContext } from "react";
import { AdminActiveMenuContext } from "@/context/AdminActiveMenuContext";
import { adminAuthContext } from "@/context/adminAuthContext";

const AdminBottomTab = () => {
	const { activeMenu, changeActiveMenu } = useContext(AdminActiveMenuContext);
	const { adminLogOut } = useContext(adminAuthContext);

	return (
		<div className="lg:hidden flex items-center justify-center">
			<div className="min-w-[70%] fixed py-5 px-10 bg-lightContent dark:dark-white rounded-3xl shadow-2xl bottom-5 animate__animated animate__zoomIn">
				<ul className="font-DMSans  flex items-center justify-between gap-5">
					<li onClick={() => changeActiveMenu("projects")}>
						{activeMenu === "projects" ? (
							<IoBriefcase size={24} className="cursor-pointer" />
						) : (
							<IoBriefcaseOutline
								size={24}
								className="cursor-pointer"
							/>
						)}
					</li>
					<li onClick={() => changeActiveMenu("settings")}>
						{activeMenu === "settings" ? (
							<IoSettingsSharp
								size={24}
								className="cursor-pointer"
							/>
						) : (
							<IoSettingsOutline
								size={24}
								className="cursor-pointer"
							/>
						)}
					</li>
					<li onClick={adminLogOut}>
						<IoMdExit size={24} className="cursor-pointer" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminBottomTab;
