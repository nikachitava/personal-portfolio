import { IProjectCardProps } from "@/types/IProjectCardProps";
import { Link } from "react-router-dom";

const ProjectCard: React.FC<IProjectCardProps> = ({
	_id,
	image,
	name,
	description,
	tech_stack,
	github_link,
	live_link,
}) => {
	return (
		<div
			key={_id}
			className="w-full lg:max-w-[375px] rounded-[20px] bg-white dark:bg-[#363636] overflow-hidden shadow-custom-blur"
		>
			<img
				src={image}
				alt="cover"
				className="object-fill w-full h-auto"
			/>
			<div className="p-7 space-y-3">
				<h1 className="font-Poppins text-2xl font-medium text-black dark:text-solidHeadingDarkMode">
					{name}
				</h1>
				<p className="font-Poppins text-lg text-darkContent dark:text-solidHeadingDarkMode">
					{description}
				</p>
				<p className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
					Tech Stack:{" "}
					<span className="text-sm font-light text-heading dark:text-solidHeadingDarkMode">
						{tech_stack}
					</span>
				</p>
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
