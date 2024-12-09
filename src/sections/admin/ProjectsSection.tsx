import { Button } from "@/components/ui/button";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import { MdAdd } from "react-icons/md";

const ProjectsSection = () => {
	const { toggleModal } = useContext(ModalContext);

	return (
		<section className="relative space-y-28 animate__animated animate__fadeInDown mt-10">
			<h1 className="text-center text-heading uppercase font-medium font-Poppins text-5xl leading-6 mb-10 dark:text-solidHeadingDarkMode">
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
				{/* <ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard /> */}
			</div>
		</section>
	);
};

export default ProjectsSection;
