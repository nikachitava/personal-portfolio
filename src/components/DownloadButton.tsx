import { IDownloadButtonProps } from "../types/IDownloadButtonProps";

const DownloadButton: React.FC<IDownloadButtonProps> = ({ path, title }) => {
	return (
		<a
			href={path}
			download
			className="dark:bg-buttonSuccess text-white p-4 rounded-md bg-darkMode dark:text-darkMode font-Poppins font-bold"
		>
			<button>{title}</button>
		</a>
	);
};

export default DownloadButton;
