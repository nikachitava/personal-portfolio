export interface IAdminAuthContextType {
	isAuthenticated: boolean;
	authAdmin: (email: string, password: string) => Promise<void>;
}