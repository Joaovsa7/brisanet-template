import type { Config } from 'tailwindcss'
import { black, emerald, indigo, red, white, zinc } from 'tailwindcss/colors'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			white,
			black,
			neutral: zinc,
			primary: indigo,
			destructive: red,
			success: emerald
		},
		extend: {
			fontFamily: {
				sans: 'var(--font-default)'
			},
			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				contentShow: {
					from: {
						opacity: '0',
						transform: 'translate(-50%, -48%) scale(0.96)'
					},
					to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
				}
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
			},
			gridTemplateColumns: {
				app: '1fr 384px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')]
}
export default config
