import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TechStackPage from "./pages/TechStackPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from "./RootLayout";
import AdminDashboardLayout from "./AdminDashboardLayout";
import HomePageDashboard from "./pages/admin/HomePageDashboard";
import AdminProtectedRoute from "./components/custom/AdminProtectedRoute";
import AuthAdminForm from "./components/custom/AuthAdminForm";
import ToggleDarkModeProvider from "./context/ToggleDarkModeContext";
import ProjectsPage from "./pages/ProjectsPage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToggleDarkModeProvider>
				<BrowserRouter>
					<Routes>
						{/* Root  Layout */}
						<Route element={<RootLayout />}>
							<Route path="/" element={<HomePage />} />
							<Route path="about" element={<AboutPage />} />
							<Route
								path="tech-stack"
								element={<TechStackPage />}
							/>
							<Route path="projects" element={<ProjectsPage />} />
							<Route path="contact" element={<ContactPage />} />
						</Route>

						{/* Admin Dashboard Layout */}
						<Route element={<AdminDashboardLayout />}>
							<Route
								path="/admin-auth"
								element={<AuthAdminForm />}
							/>
							<Route
								path="admin"
								element={
									<AdminProtectedRoute>
										<HomePageDashboard />
									</AdminProtectedRoute>
								}
							></Route>
						</Route>
						<Route path="*" element={<h1>Page not found</h1>} />
					</Routes>
				</BrowserRouter>
			</ToggleDarkModeProvider>
		</QueryClientProvider>
	</StrictMode>
);
