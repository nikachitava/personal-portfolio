/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: "true",
				padding: {
					DEFAULT: "1rem",
					sm: "25rem",
				},
				screens: {
					sm: "100%",
					md: "100%",
					lg: "100%",
					xl: "1200px",
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
			boxShadow: {
				"custom-blur": "2px 2px 100px 0 rgba(0, 0, 0, 0.2)",
				"new-blur": "2px 2px 10px 0 rgba(0, 0, 0, 0.8)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
	darkMode: "selector",
};
