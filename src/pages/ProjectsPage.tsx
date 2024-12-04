import React, { Suspense } from "react";

const ProjectsSection = React.lazy(() => import("../sections/ProjectsSection"));

const ProjectsPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProjectsSection />
		</Suspense>
	);
};

export default ProjectsPage;
