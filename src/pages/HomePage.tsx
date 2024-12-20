import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechStackSection from "../sections/TechStackSection";
import { motion } from "framer-motion";

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 1000 }}
			animate={{
				opacity: [0.1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.5, 0.7, 1],
				y: 0,
			}}
			transition={{ duration: 1.5 }}
			className="space-y-56"
		>
			<HeroSection />
			<TechStackSection />
			<ProjectsSection />
		</motion.div>
	);
};

export default HomePage;
