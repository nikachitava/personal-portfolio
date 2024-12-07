import ProjectCard from "@/components/custom/ProjectCard";

const ProjectsSection = () => {
	return (
		<section>
			<h1 className="text-center text-heading font-Poppins font-bold text-5xl leading-6 mb-10 dark:text-solidHeadingDarkMode">
				Projects
			</h1>
			<h4 className="text-center font-Poppins text-3xl text-darkContent mb-[140px] dark:text-lightContent">
				Projects I've built so far
			</h4>
			<div className="flex flex-wrap justify-between">
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
