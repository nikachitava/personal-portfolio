import "animate.css";

const HeroSection = () => {
	return (
		<section className="flex items-center justify-center lg:justify-between animate__animated animate__slideInDown">
			<h1 className="font-bold font-Poppins text-heading dark:text-[#D9D9D9] text-6xl leading-[70px] animate__animated animate__zoomIn">
				Hi 👋, <br />
				My name is <br />
				<span className="text-gradient">nika chitava</span>
				<br /> I build things for web
			</h1>
			<img
				src="/images/nk1.png"
				alt="image"
				className="hidden lg:block animate__animated animate__zoomIn"
			/>
		</section>
	);
};

export default HeroSection;
