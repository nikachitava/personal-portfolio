import { Link } from "react-router-dom";
import git1 from "/images/icons/git1.svg";
import linkedin from "/images/icons/linkedin.svg";

const SocialMedia = () => {
	return (
		<div className="flex items-center gap-4">
			<Link to={"https://github.com/nikachitava"}>
				<img src={git1} alt="git_icon" />
			</Link>
			<Link to={"https://www.linkedin.com/in/nikachitava18/"}>
				<img src={linkedin} alt="linkedin_icon" />
			</Link>
		</div>
	);
};

export default SocialMedia;
