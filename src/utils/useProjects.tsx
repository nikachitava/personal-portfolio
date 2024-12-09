import { useState, useEffect } from "react";
import { useAxios } from "@/utils/useAxios";
import { IProjectCardProps } from "@/types/IProjectCardProps";

const useProjects = () => {
	const [projects, setProjects] = useState<IProjectCardProps[] | null>(null);

	const fetchProjects = async () => {
		try {
			const fetchedProjects = await useAxios.get("/projects");
			setProjects(fetchedProjects.data);
		} catch (error) {
			console.error("Error fetching projects:", error);
		}
	};

	useEffect(() => {
		fetchProjects();
	}, []);

	return { projects, fetchProjects };
};

export default useProjects;
