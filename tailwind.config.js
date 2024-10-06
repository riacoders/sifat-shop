/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				customPurple: '#5c5dc7',
				footerColor: '#e2e2f8',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
