import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

import { MdInfo } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

import { AiFillTool } from "react-icons/ai";
import { AiOutlineTool } from "react-icons/ai";

import { IoBriefcase } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";

import { IoCall } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BottomTabNav = () => {
	const [activePage, setActivePage] = useState("home");

	const location = useLocation();

	const getActivepage = () => {
		switch (location.pathname) {
			case "/":
				return setActivePage("home");
			case "/about":
				return setActivePage("about");
			case "/tech-stack":
				return setActivePage("tech-stack");
			case "/projects":
				return setActivePage("projects");
			case "/contact":
				return setActivePage("contact");
		}
	};

	useEffect(() => {
		getActivepage();
	}, [location.pathname]);

	return (
		<div className="lg:hidden flex items-center justify-center">
			<div className="min-w-[70%] fixed py-5 px-10 bg-lightContent dark:dark-white rounded-3xl shadow-2xl bottom-5 animate__animated animate__zoomIn">
				<div className="flex items-center justify-between gap-5">
					<Link to={"/"}>
						{activePage === "home" ? (
							<FaHome size={32} />
						) : (
							<IoHomeOutline size={32} />
						)}
					</Link>

					<Link to={"/about"}>
						{activePage === "about" ? (
							<MdInfo size={32} />
						) : (
							<MdInfoOutline size={32} />
						)}
					</Link>

					<Link to={"/tech-stack"}>
						{activePage === "tech-stack" ? (
							<AiFillTool size={32} />
						) : (
							<AiOutlineTool size={32} />
						)}
					</Link>

					<Link to={"/projects"}>
						{activePage === "projects" ? (
							<IoBriefcase size={32} />
						) : (
							<IoBriefcaseOutline size={32} />
						)}
					</Link>

					<Link to={"/contact"}>
						{activePage === "contact" ? (
							<IoCall size={32} />
						) : (
							<IoCallOutline size={32} />
						)}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BottomTabNav;
