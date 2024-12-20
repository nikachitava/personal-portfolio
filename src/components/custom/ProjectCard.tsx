import { adminAuthContext } from "@/context/adminAuthContext";
import { IProjectCardProps } from "@/types/IProjectCardProps";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { useAxios } from "@/utils/useAxios";
import useProjects from "@/utils/useProjects";

const ProjectCard: React.FC<IProjectCardProps> = ({
	_id,
	image,
	name,
	github_link,
	live_link,
}) => {
	const { isAuthenticated } = useContext(adminAuthContext);

	const { refetchProjects } = useProjects();

	const deleteProject = async (projectID: string) => {
		try {
			await useAxios.delete(`/projects/deleteproject/${projectID}`);
			refetchProjects();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			key={_id}
			className="min-w-[350px] max-w-[375px] rounded-[20px] bg-white dark:bg-[#363636] overflow-hidden shadow-custom-blur relative"
		>
			{isAuthenticated && _id && (
				<div
					className="absolute right-[10px] top-[10px] bg-slate-500 p-2 text-center rounded-full hover:bg-slate-700 cursor-pointer"
					onClick={() => deleteProject(_id)}
				>
					<MdDeleteSweep size={30} color="white" />
				</div>
			)}
			<img
				src={image[0]}
				alt="cover"
				className="object-fill w-[375px] h-[200px]"
			/>
			<div className="p-7 space-y-5">
				<Link to={`/project/${_id}`}>
					<h1 className="font-Poppins text-2xl mb-3 font-medium text-black dark:text-solidHeadingDarkMode">
						{name}
					</h1>
					<p className="font-Poppins underline underline-offset-2  text-heading dark:text-solidHeadingDarkMode">
						Click to get more information
					</p>
				</Link>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<img src="/images/icons/linkicon.svg" alt="link_icon" />
						<Link to={live_link}>
							<p className="font-Poppins text-black underline dark:text-white">
								Live Preview
							</p>
						</Link>
					</div>
					<div className="flex items-center gap-3">
						<img src="/images/icons/git2.svg" alt="link_icon" />
						<Link to={github_link}>
							<p className="font-Poppins text-black underline dark:text-white">
								Github Code
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
