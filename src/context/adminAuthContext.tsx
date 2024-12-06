import { IAdminAuthContextType } from "@/types/IAdminAuthContextType";
import { useAxios } from "@/utils/useAxios";
import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_AUTH_DEFAULT_VALUES: IAdminAuthContextType = {
	isAuthenticated: false,
	authAdmin: async () => {},
	adminLogOut: async () => {},
};

export const adminAuthContext = createContext<IAdminAuthContextType>(
	ADMIN_AUTH_DEFAULT_VALUES
);

const AdminAuthContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem("authToken") ? true : false
	);

	const navigate = useNavigate();

	const authAdmin = async (email: string, password: string) => {
		try {
			const response = await useAxios.post("/admin/auth", {
				email,
				password,
			});

			const { token } = response.data;
			if (response.status === 200) {
				localStorage.setItem("authToken", token);
				setIsAuthenticated(true);
				navigate("/admin");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const adminLogOut = async () => {
		try {
			localStorage.removeItem("authToken");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<adminAuthContext.Provider
			value={{ isAuthenticated, authAdmin, adminLogOut }}
		>
			{children}
		</adminAuthContext.Provider>
	);
};

export default AdminAuthContextProvider;
