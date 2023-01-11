/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: {
					400: '#6FA8FF'
				},
				base: {
					900: '#0D1117',
					700: '#11161E',
					500: '#5C6A7E'
				}
			}
		}
	},
	plugins: []
}
