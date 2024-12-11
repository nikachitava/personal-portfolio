import LoaderSpinner from "@/components/custom/LoaderSpinner";
import ProjectCard from "@/components/custom/ProjectCard";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/context/ModalContext";

import useProjects from "@/utils/useProjects";
import { useContext } from "react";
import { MdAdd } from "react-icons/md";

const ProjectsSection = () => {
	const { toggleModal } = useContext(ModalContext);

	const { projects, isLoading, error } = useProjects();

	if (isLoading) return <LoaderSpinner />;
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen bg-gray-900">
				<h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text animate-gradient">
					Loading...
				</h1>
			</div>
		);
	}
	if (error) return <div>Error fetching projects. Please try again.</div>;

	return (
		<section className="relative space-y-28 animate__animated animate__fadeInDown mt-10">
			<h1 className="text-center break-words text-heading uppercase font-medium font-Poppins text-lg lg:text-5xl  mb-10 dark:text-solidHeadingDarkMode">
				Your Recent Projects
			</h1>
			<div className="text-right">
				<Button
					className="font-DMSans h-12 shadow-2xl"
					onClick={toggleModal}
				>
					<MdAdd size={24} /> Create New Project
				</Button>
			</div>
			<div className="flex flex-wrap justify-between gap-10">
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
