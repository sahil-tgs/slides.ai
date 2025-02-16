import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				surface: {
					100: 'hsl(var(--surface-100))',
					200: 'hsl(var(--surface-200))',
					300: 'hsl(var(--surface-300))',
					400: 'hsl(var(--surface-400))',
				},

				brand: {
					50: 'hsl(var(--brand-50))',
					100: 'hsl(var(--brand-100))',
					200: 'hsl(var(--brand-200))',
					300: 'hsl(var(--brand-300))',
					400: 'hsl(var(--brand-400))',
					500: 'hsl(var(--brand-500))',
					600: 'hsl(var(--brand-600))',
					700: 'hsl(var(--brand-700))',
					800: 'hsl(var(--brand-800))',
					900: 'hsl(var(--brand-900))',
				},

				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					tertiary: 'hsl(var(--text-tertiary))',
					disabled: 'hsl(var(--text-disabled))',
				},

				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},

				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},

				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},

				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},

				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},

				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},

				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},

				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					muted: 'hsl(var(--sidebar-muted))',
					border: 'hsl(var(--sidebar-border))',
				},

				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},

			backgroundImage: {
				'creative-ai-gradient': 'var(--creative-ai-gradient)',
			},

			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-out': {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
			},

			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.2s ease-out',
				'fade-out': 'fade-out 0.2s ease-out',
			},

			fontSize: {
				'2xs': '0.625rem',
				'3xs': '0.5rem',
			},

			spacing: {
				18: '4.5rem',
				22: '5.5rem',
			},

			height: {
				screen: ['100vh /* fallback */', '100dvh'],
			},

			minHeight: {
				screen: ['100vh /* fallback */', '100dvh'],
			},

			maxHeight: {
				screen: ['100vh /* fallback */', '100dvh'],
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
	],
} satisfies Config