import ProjectCard from "@/components/custom/ProjectCard";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/context/ModalContext";
import { IProjectCardProps } from "@/types/IProjectCardProps";
import { useAxios } from "@/utils/useAxios";
import { useContext, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";

const ProjectsSection = () => {
	const { toggleModal } = useContext(ModalContext);

	const [projects, setProjects] = useState<IProjectCardProps[] | null>(null);

	const fetchProjects = async () => {
		try {
			const fetchedProjects = await useAxios.get("/projects");
			setProjects(fetchedProjects.data);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(projects);

	useEffect(() => {
		fetchProjects();
	}, []);

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
