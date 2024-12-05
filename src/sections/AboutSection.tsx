import DownloadButton from "../components/custom/DownloadButton";

const AboutSection = () => {
	return (
		<section className="min-h-screen space-y-5">
			<div className="flex items-end justify-between">
				<div>
					<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
						Nika Chitava
					</h1>
					<p className="font-Poppins  text-heading dark:text-solidHeadingDarkMode ">
						Front-end Developer
					</p>
				</div>
				<p className="font-Poppins  text-heading dark:text-solidHeadingDarkMode ">
					chitava18.official@gmail.com
				</p>
			</div>
			<hr className="my-5" />
			<div>
				<h3 className="font-Poppins text-2xl text-heading dark:text-solidHeadingDarkMode font-bold">
					Summary
				</h3>
				<p className="font-Poppins  text-heading dark:text-solidHeadingDarkMode  leading-8">
					I am a dedicated Front-End Developer with a strong passion
					for crafting interactive, user-friendly web applications
					using modern technologies such as React.js, Next.js,
					TypeScript, and Tailwind CSS. I focus on building scalable
					and responsive interfaces that provide seamless user
					experiences. Continuously improving my skills, I stay
					updated with the latest trends in web development and strive
					to enhance my expertise to create high-quality, innovative
					solutions. My goal is to contribute effectively while
					growing and evolving in the field of front-end development.
				</p>
			</div>
			<hr className="my-5" />
			<div>
				<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
					Education
				</h1>
				<div className="my-3">
					<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-bold">
						European University (Georgia, 2021 - present)
					</p>
					<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode ">
						Bacher: Information Technology
					</span>
				</div>
				<div className="my-3">
					<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-bold">
						Daugavpils University (Latvia, 2024 spring semester)
					</p>
					<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
						Bacher: Information Technology (Erasmus + exchange
						program)
					</span>
				</div>
			</div>
			<div>
				<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
					Proffesional development
				</h1>
				<div className="my-3">
					<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-bold">
						Machine Learning & NLP Training
					</p>
					<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode ">
						Blended Intensive Program, PXL University, Belgium
					</span>
				</div>
			</div>
			<hr />
			<div className="flex flex-col lg:flex-row space-y-5 items-start justify-between">
				<div>
					<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
						Hard Skills
					</h1>
					<ul className="list-disc pl-5">
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Frontend Development:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								{" "}
								React.js, Next.js, TypeScript, HTML, CSS
								(TailwindCSS)
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Backend Development:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Node.js, NestJS
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Database Management:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								MongoDB, MySQL
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								API Integration:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Axios, REST API
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Version Control:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Git, GitHub
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								UI Design:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Figma
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Testing and Validation:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Zod, React Hook Form
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Cloud Services:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Firebase (Storage, Uploads)
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Full-Stack Development:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								CRUD operations, real estate filters, dynamic
								layouts
							</span>
						</li>
						<li className="text-heading dark:text-solidHeadingDarkMode">
							<p className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium inline-block">
								Responsive Design:
							</p>
							<span className="font-Poppins text-heading dark:text-solidHeadingDarkMode">
								Mobile-first and cross-resolution compatibility
							</span>
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
						Soft Skills
					</h1>
					<ul className="list-disc pl-5">
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Strong problem-solving abilities
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Team collaboration in diverse environments
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Effective communication skills
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Time management and meeting deadlines
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Adaptability and willingness to learn
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Attention to detail
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Critical thinking and analysis
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Multicultural experience and openness
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="flex flex-col items-start justify-between lg:flex-row space-y-5">
				<div>
					<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
						Technologies
					</h1>
					<ul className="list-disc pl-5 space-y-5">
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Programming Languages
							<ul className="list-inside list-disc pl-5">
								<li>JavaScript (ES6+), TypeScript, Node.js</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Front-End Development
							<ul className="list-inside list-disc pl-5">
								<li>React.js, Next.js</li>
								<li>HTML5, CSS3, Tailwind CSS</li>
								<li>JavaScript (ES6+)</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Back-End Development
							<ul className="list-inside list-disc pl-5">
								<li>Node.js, Express.js</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Database Management
							<ul className="list-inside list-disc pl-5">
								<li>MongoDB</li>
								<li>SQL</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Version Control
							<ul className="list-inside list-disc pl-5">
								<li>Git, GitHub</li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-Poppins text-3xl text-heading dark:text-solidHeadingDarkMode font-bold">
						Projects
					</h1>
					<ul className="list-disc pl-5 space-y-5 ">
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							Real-Estate Manager For Redberry
							<ul className="list-inside list-disc pl-5">
								<li>Next.js, Tailwind CSS, REST API</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							StoryLens - Client Side
							<ul className="list-inside list-disc pl-5">
								<li>React.js, Tailwind CSS</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							StoryLens - Server Side
							<ul className="list-inside list-disc pl-5">
								<li>Node.js, Express.js, SQL, MySQL</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							yourAuto - Client Side
							<ul className="list-inside list-disc pl-5">
								<li>ReactJS, TaillwindCSS, RestAPI</li>
							</ul>
						</li>
						<li className="font-Poppins text-lg text-heading dark:text-solidHeadingDarkMode font-medium">
							yourAuto - Server Side
							<ul className="list-inside list-disc pl-5">
								<li>NestJS, MongoDB</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div className="mt-20">
					<DownloadButton
						path="/files/nchitava_cv.pdf"
						title="Download CV"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
