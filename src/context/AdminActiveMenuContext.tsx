import { createContext, ReactNode, useState } from "react";

interface IAdminActiveMenu {
	activeMenu: string;
	changeActiveMenu: (menuName: string) => void;
}

const ADMIN_ACTIVE_MENU_DEFAULT_VALUES: IAdminActiveMenu = {
	activeMenu: "admin-home",
	changeActiveMenu: () => {},
};

export const AdminActiveMenuContext = createContext<IAdminActiveMenu>(
	ADMIN_ACTIVE_MENU_DEFAULT_VALUES
);

const AdminActiveMenuContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [activeMenu, setActiveMenu] = useState("projects");

	const changeActiveMenu = (menuName: string) => {
		setActiveMenu(menuName);
	};

	return (
		<AdminActiveMenuContext.Provider
			value={{ activeMenu, changeActiveMenu }}
		>
			{children}
		</AdminActiveMenuContext.Provider>
	);
};

export default AdminActiveMenuContextProvider;
