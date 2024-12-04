import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
	return (
		<section>
			<h1 className="text-center text-heading font-Poppins font-bold text-5xl leading-6 mb-10 dark:text-solidHeadingDarkMode">
				Projects
			</h1>
			<h4 className="text-center font-Poppins text-3xl text-darkContent mb-[140px] dark:text-lightContent">
				Projects I've built so far
			</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
};

export default ProjectsSection;
