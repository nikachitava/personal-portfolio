import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const NavBar = () => {
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
	};
	return (
		<header className="container flex items-center justify-between py-10 relative">
			<Link to="/">
				<h1 className="font-Poppins text-2xl font-bold text-gradient">
					NC18
				</h1>
			</Link>
			<nav className="hidden lg:block">
				<ul className="flex items-center gap-16 font-DMSans">
					<li className="font-medium text-xl text-darkContent dark:text-lightContent">
						<Link to="/">Home</Link>
					</li>
					<li className="font-medium text-xl text-darkContent dark:text-lightContent">
						<Link to="/about">About</Link>
					</li>
					<li className="font-medium text-xl text-darkContent dark:text-lightContent">
						<Link to="/tech-stack">Tech Stack</Link>
					</li>
					<li className="font-medium text-xl text-darkContent dark:text-lightContent">
						<Link to="/projects">Projects</Link>
					</li>
					<li className="font-medium text-xl text-darkContent dark:text-lightContent">
						<Link to="/contact">Contact</Link>
					</li>
					<SocialMedia />
					<li
						onClick={toggleDarkMode}
						className="cursor-pointer dark:text-white"
					>
						DarkMode
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
