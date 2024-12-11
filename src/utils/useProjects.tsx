import { useAxios } from "@/utils/useAxios";
import { IProjectCardProps } from "@/types/IProjectCardProps";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchProjects = async (): Promise<IProjectCardProps[]> => {
	const response = await useAxios.get("/projects");
	return response.data;
};

const useProjects = () => {
	const queryClient = useQueryClient();

	const {
		data: projects,
		isLoading,
		error,
	} = useQuery<IProjectCardProps[], Error>({
		queryKey: ["projects"],
		queryFn: fetchProjects,
	});

	// Utility to refetch projects
	const refetchProjects = () => {
		queryClient.invalidateQueries({ queryKey: ["projects"] });
	};

	return { projects, isLoading, error, refetchProjects };
};

export default useProjects;
