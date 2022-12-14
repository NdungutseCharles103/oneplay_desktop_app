const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./contexts/**/*.{js,ts,jsx,tsx}",
		"**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		screens: {
			three: "350px",
			five: "500px",
			tablet: "640px",
			ltab: "780px",
			xtab: "960px",
			ltop: "1050px",
			desktop: "1280px",
			lg: "1440px",
			xl: "1600px",
		},
		colors: {
			// use colors only specified
			...colors,
			white: colors.white,
			gray: colors.gray,
			blue: colors.blue,
			"light-slate": {
				DEFAULT: "#f4f5fe",
			},
			main: {
				DEFAULT: "#ff3f00",
			},
		},
		extend: {},
	},
	plugins: [],
};
