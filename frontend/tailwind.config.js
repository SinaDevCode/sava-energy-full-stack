/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "325px", // => @media (min-width: 325px)
			sm: "576px", // => @media (min-width: 576px)
			md: "768px", // => @media (min-width: 768px)
			lg: "1056px", // => @media (min-width: 1056px)
			xl: "1200px", // => @media (min-width: 1200px)
			"2xl": "1400px", // => @media (min-width: 1400px)
		},
		fontFamily: {
			Roboto: ["Roboto", "system-ui"],
		},
		colors: {
			white: "#fff",
			light: "rgb(240, 241, 243)",
			grey: "rgb(80, 80, 80)",
			cyan: "rgb(30, 189, 184)",
			gold: "rgb(219, 177, 59)",
			darkblue: "rgb(45, 50, 90)",
			// Use this color for inactive links
			disable: "rgba(255, 255, 255, 0.5)",
		},
		extend: {},
	},
	plugins: [],
};
