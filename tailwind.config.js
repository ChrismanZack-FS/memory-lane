/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx,md}",
		"./components/**/*.{js,ts,jsx,tsx,mdx,md}",
		"./app/**/*.{js,ts,jsx,tsx,mdx,md,css}",
		"./posts/**/*.{js,ts,jsx,tsx,mdx,md}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0f4b3e",
				secondary: "#32cd32",
				background: "#121212",
				text: "#e0e0e0",
			},
		},
	},
	plugins: [],
};
