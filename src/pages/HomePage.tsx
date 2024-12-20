import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechStackSection from "../sections/TechStackSection";

const HomePage = () => {
	return (
		<div className="space-y-56">
			<HeroSection />
			<TechStackSection />
			<ProjectsSection />
		</div>
	);
};

export default HomePage;
