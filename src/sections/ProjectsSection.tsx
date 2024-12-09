import useProjects from "@/utils/useProjects";
import ProjectCard from "../components/custom/ProjectCard";

const ProjectsSection = () => {
	const { projects } = useProjects();

	return (
		<section>
			<h1 className="text-center text-heading font-Poppins font-bold text-5xl leading-6 mb-10 dark:text-solidHeadingDarkMode">
				Projects
			</h1>
			<h4 className="text-center font-Poppins text-3xl text-darkContent mb-[140px] dark:text-lightContent">
				Projects I've built so far
			</h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
				{projects ? (
					projects.map((project) => (
						<ProjectCard
							key={project._id}
							_id={project._id}
							image={project.image}
							name={project.name}
							description={project.description}
							tech_stack={project.tech_stack}
							github_link={project.github_link}
							live_link={project.live_link}
						/>
					))
				) : (
					<h1>You dont have project added </h1>
				)}
			</div>
		</section>
	);
};

export default ProjectsSection;
