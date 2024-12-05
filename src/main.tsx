import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TechStackPage from "./pages/TechStackPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from "./RootLayout";
import AdminDashboardLayout from "./AdminDashboardLayout";
import HomePageDashboard from "./pages/HomePageDashboard";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				{/* Root  Layout */}
				<Route element={<RootLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="tech-stack" element={<TechStackPage />} />
					<Route path="projects" element={<ProjectsPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="*" element={<h1>Page not found</h1>} />
				</Route>

				{/* Admin Dashboard Layout */}
				<Route element={<AdminDashboardLayout />}>
					<Route path="/admin" element={<HomePageDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
