import type { Config } from 'tailwindcss'
import {
	black,
	current,
	emerald,
	red,
	transparent,
	white,
	zinc
} from 'tailwindcss/colors'
const { withTV } = require('tailwind-variants/transformer')

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			white,
			black,
			transparent,
			current,
			neutral: zinc,
			primary: '#ff5022',
			secondary: '#2242d4',
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
				},
				slideUpAndFade: {
					from: { opacity: '0', transform: 'translateY(2px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				slideRightAndFade: {
					from: { opacity: '0', transform: 'translateX(-2px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				slideDownAndFade: {
					from: { opacity: '0', transform: 'translateY(-2px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				slideLeftAndFade: {
					from: { opacity: '0', transform: 'translateX(2px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				apperFromTop: {
					from: { opacity: '0', transform: 'translateY(-100%)' },
					to: { opacity: '1', transform: 'translateY(0%)' }
				}
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideRightAndFade:
					'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideDownAndFade:
					'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				slideLeftAndFade:
					'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
				apperFromTop: 'apperFromTop 1s ease-in-out'
			},
			gridTemplateColumns: {
				withSidebar: '1fr 384px'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')]
}

export default withTV(config)
