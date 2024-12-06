import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

import { ToggleDarkModeContext } from "@/context/ToggleDarkModeContext";
import { useContext } from "react";

const ModeToggle = () => {
	const { toggleDarkMode, isDarkMode } = useContext(ToggleDarkModeContext);
	return (
		<div
			onClick={toggleDarkMode}
			className="cursor-pointer dark:text-white"
		>
			{isDarkMode ? <CiLight size={30} /> : <FaMoon size={30} />}
		</div>
	);
};

export default ModeToggle;
