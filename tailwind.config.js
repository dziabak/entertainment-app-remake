/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: { main: ["Outfit", "sans-serif"] },
		extend: {
			colors: {
				"c-white": "#FFFFFF",
				"c-black": "#10141E",
				"c-dark-blue": "#161D2F",
				"c-light-blue": "#5A698F",
				"c-red": "#FC4747",
			},
			container: {
				center: true,
				padding: {
					// DEFAULT: "1rem",
					sm: "0rem",
					md: "1rem",
					lg: "1rem",
					// xl: "16rem",
					// "2xl": "6rem",
				},
			},
			screens: {
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
};
