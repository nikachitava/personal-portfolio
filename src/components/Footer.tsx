import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
	return (
		<footer className="space-y-5 py-10 mt-56">
			<div className="flex items-center justify-between">
				<Link to="/">
					<h1 className="font-Poppins text-2xl font-bold text-gradient">
						NC18
					</h1>
				</Link>

				<div className="flex items-center space-x-12">
					<p className="font-DMSans text-lg text-heading dark:text-lightContent">
						chitava18.official@gmail.com
					</p>
					<SocialMedia />
				</div>
			</div>

			<hr />

			<div className="flex items-center justify-between">
				<ul className="flex items-center gap-16 font-DMSans">
					<li className="font-medium text-lg text-darkContent dark:text-lightContent">
						<Link to="/">Home</Link>
					</li>
					<li className="font-medium text-lg text-darkContent dark:text-lightContent">
						<Link to="/">About</Link>
					</li>
					<li className="font-medium text-lg text-darkContent dark:text-lightContent">
						<Link to="/">Tech Stack</Link>
					</li>
					<li className="font-medium text-lg text-darkContent dark:text-lightContent">
						<Link to="/">Projects</Link>
					</li>
					<li className="font-medium text-lg text-darkContent dark:text-lightContent">
						<Link to="/">Contact</Link>
					</li>
				</ul>
				<p className="text-heading dark:text-lightContent font-Poppins text-lg">
					Designed and built by{" "}
					<Link
						to={
							"https://www.figma.com/design/14VM8AVRDUs5KrNzenEMed/Developer-Portfolio-Design-(Community)?node-id=14-11&node-type=frame&t=WZMFgYSuGANKLODA-0"
						}
					>
						<span className="text-gradient"> Pavan MG</span>
					</Link>{" "}
					with <span className="text-gradient"> Love & Coffee</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
