const ProjectCard = () => {
	return (
		<div className="w-full lg:max-w-[375px] rounded-[20px] bg-white dark:bg-[#363636] overflow-hidden shadow-custom-blur">
			<img
				src="/images/projectcover.png"
				alt="cover"
				className="object-fill w-full h-auto"
			/>
			<div className="p-7 space-y-3">
				<h1 className="font-Poppins text-2xl font-medium text-black dark:text-solidHeadingDarkMode">
					Project title
				</h1>
				<p className="font-Poppins text-lg text-darkContent dark:text-solidHeadingDarkMode">
					This is sample project description random things are here in
					description This is sample project lorem ipsum generator for
					dummy content
				</p>
				<p className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
					Tech Stack:{" "}
					<span className="text-sm font-light text-heading dark:text-solidHeadingDarkMode">
						HTML, CSS
					</span>
				</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<img src="/images/icons/linkicon.svg" alt="link_icon" />
						<p className="font-Poppins text-black underline dark:text-white">
							Link Preview
						</p>
					</div>
					<div className="flex items-center gap-3">
						<img src="/images/icons/git2.svg" alt="link_icon" />
						<p className="font-Poppins text-black underline dark:text-white">
							Link Preview
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
