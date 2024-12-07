import { createContext, ReactNode, useState } from "react";

export const ToggleDarkModeContext = createContext({
	isDarkMode: false,
	toggleDarkMode: () => {},
});

const ToggleDarkModeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(
		document.documentElement.classList.contains("dark")
	);

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
		setIsDarkMode(!isDarkMode); // Update state after toggling
	};

	// useEffect(() => {
	// 	setIsDarkMode(document.documentElement.classList.contains("dark"));
	// }, []);

	return (
		<ToggleDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</ToggleDarkModeContext.Provider>
	);
};

export default ToggleDarkModeProvider;
