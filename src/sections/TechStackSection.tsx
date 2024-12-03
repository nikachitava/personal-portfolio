import css3 from "/images/icons/css3.svg";
import tailwindcss from "/images/icons/tailwindcss.svg";
import html5 from "/images/icons/html5.svg";
import js from "/images/icons/js.svg";
import mongodb from "/images/icons/mongodb.svg";
import mysql from "/images/icons/mysql.svg";
import nodejs from "/images/icons/nodejs.svg";
import react from "/images/icons/react.svg";
import typescript from "/images/icons/typescript.svg";
import git from "/images/icons/git.svg";

const TechStackSection = () => {
	return (
		<section>
			<h1 className="text-center text-heading font-Poppins font-bold text-5xl leading-6 mb-10 dark:text-solidHeadingDarkMode">
				My Tech Stack
			</h1>
			<h4 className="text-center font-Poppins text-3xl text-darkContent mb-[140px] dark:text-lightContent">
				Technologies I've been working with recently
			</h4>
			<div className="flex overflow-auto lg:flex-row items-center lg:flex-wrap lg:justify-between gap-20">
				<img src={html5} alt="icon" width={131} height={131} />
				<img src={css3} alt="icon" width={131} height={131} />
				<img src={tailwindcss} alt="icon" width={131} height={131} />
				<img src={js} alt="icon" width={131} height={131} />
				<img src={react} alt="icon" width={131} height={131} />
				<img src={typescript} alt="icon" width={131} height={131} />
				<img src={nodejs} alt="icon" width={131} height={131} />
				<img src={mysql} alt="icon" width={131} height={131} />
				<img src={mongodb} alt="icon" width={131} height={131} />
				<img src={git} alt="icon" width={131} height={131} />
			</div>
		</section>
	);
};

export default TechStackSection;
