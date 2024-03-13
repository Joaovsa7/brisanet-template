import { Barlow } from 'next/font/google'
import './globals.css'

const font = Barlow({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-default',
	subsets: ['latin']
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR" className={font.variable}>
			<body className="antialiased">{children}</body>
		</html>
	)
}
