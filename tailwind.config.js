/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true, // Centers the container
				padding: "1rem", // Adds default padding to the container
				screens: {
					sm: "100%", // Full width on small screens
					md: "100%", // Full width on medium screens
					lg: "100%", // Full width on large screens
					xl: "1200px", // Maximum width for xl breakpoint
				},
			},
			fontFamily: {
				DMSans: ["DM Sans", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				heading: "#42446E",
				darkContent: "#666666",
				solidHeadingDarkMode: "#CCCCCC",
				lightContent: "#A7A7A7",
				darkMode: "#191919",
				buttonText: "#018C0F",
				buttonSuccess: "#D7FFE0",
			},
		},
	},
	plugins: [],
	darkMode: "selector",
};
