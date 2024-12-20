import { motion } from "framer-motion";

const ContactPage = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="min-h-[60vh] flex  items-center justify-center"
		>
			<div className="text-center mb-8 space-y-8">
				<h1 className="text-6xl font-bold dark:text-white text-heading">
					Contact Me
				</h1>
				<p className="text-3xl dark:text-white text-heading mt-2">
					Feel free to reach out to me for any opportunities or
					inquiries.
				</p>
				<p className="text-3xl dark:text-white text-heading mt-2">
					Email: chitava18.official@gmail.com
				</p>
				<p className="text-3xl dark:text-white text-heading mt-2">
					LinkedIn: Nika Tchitava
				</p>
			</div>
		</motion.section>
	);
};

export default ContactPage;
