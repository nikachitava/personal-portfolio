import "animate.css";

const HeroSection = () => {
	return (
		<section className="flex items-center justify-center lg:justify-between min-h-[50vh]">
			<h1 className="font-bold font-Poppins text-heading dark:text-[#D9D9D9] text-6xl leading-[70px]">
				Hi 👋, <br />
				My name is <br />
				<span className="text-gradient">nika chitava</span>
				<br /> I'm Front-end Developer
			</h1>
			<img
				src="/images/nc_icon.jpg"
				alt="image"
				loading="lazy"
				className="hidden lg:block rounded-full w-1/4 h-auto"
			/>
		</section>
	);
};

export default HeroSection;
