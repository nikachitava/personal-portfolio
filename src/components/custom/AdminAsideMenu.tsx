import { useContext } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";

import { IoSettingsSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { IoMdExit } from "react-icons/io";
import ModeToggle from "@/components/custom/ModeToggle";
import { adminAuthContext } from "@/context/adminAuthContext";
import { Link } from "react-router-dom";
import { AdminActiveMenuContext } from "@/context/AdminActiveMenuContext";

const AdminAsideMenu = () => {
	const { activeMenu, changeActiveMenu } = useContext(AdminActiveMenuContext);
	const { adminLogOut } = useContext(adminAuthContext);

	return (
		<aside className="fixed hidden lg:block w-full lg:w-[450px] lg:shadow-new-blur h-screen bg-[#f5f5f5] dark:bg-darkMode p-4 z-10">
			<div className="flex justify-between items-center">
				<Link to="/">
					<h1 className="font-Poppins text-2xl font-bold text-gradient">
						NC18
					</h1>
				</Link>

				<ModeToggle />
			</div>
			<ul className="font-DMSans space-y-4 mt-20">
				<li
					className="admin-menu-li-style"
					onClick={() => changeActiveMenu("projects")}
				>
					{activeMenu === "projects" ? (
						<IoBriefcase />
					) : (
						<IoBriefcaseOutline />
					)}
					<span
						className={`${
							activeMenu === "projects" ? "font-bold" : ""
						}`}
					>
						Projects
					</span>
				</li>
				<li
					className="admin-menu-li-style"
					onClick={() => changeActiveMenu("settings")}
				>
					{activeMenu === "settings" ? (
						<IoSettingsSharp />
					) : (
						<IoSettingsOutline />
					)}
					<span
						className={`${
							activeMenu === "settings" ? "font-bold" : ""
						}`}
					>
						Settings
					</span>
				</li>
				<li className="admin-menu-li-style" onClick={adminLogOut}>
					<IoMdExit />
					Log Out
				</li>
			</ul>
		</aside>
	);
};

export default AdminAsideMenu;
