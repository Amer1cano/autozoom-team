/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			xs: "480px",
			sm: "640px",
			md: "980px",
			lg: "1200px",
			xl: "1380px",
		},
	},
	plugins: [
		'flowbite/plugin'
	],
};
