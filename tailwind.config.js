import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [flowbite.content(), './index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				puropelo: '#ECCC9F',
				'puropelo-dark': '#75553B',
			},
			fontFamily: {
				'font-calibri': ['"Calibri"', 'sans-serif'],
				'font-adigiana-toybox': ['"AdigianaToybox"', 'sans-serif'],
				'font-poppins-regular': ['"PoppinsRegular"', 'sans-serif'],
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				brand: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' },
				},
				'brand-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				brand: 'brand var(--duration) linear infinite',
				'brand-vertical': 'brand-vertical var(--duration) linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [flowbite.plugin()],
};
