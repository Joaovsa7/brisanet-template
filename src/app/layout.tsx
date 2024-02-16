import { PrismicPreview } from '@prismicio/next'
import { Barlow } from 'next/font/google'
import './globals.css'

import { createClient } from '~/libs/prismicio'

import { Footer } from '~/components/footer'
import { GoogleAnalytics } from '~/components/google-analytics'
import { Header } from '~/components/header'

import { env } from '~/config/env'

const font = Barlow({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-default',
	subsets: ['latin']
})

export async function generateMetadata() {
	const siteName = env.NEXT_PUBLIC_SITE_NAME

	return {
		title: {
			default: siteName,
			template: `%s | ${siteName}`
		},
		description: 'Encontre a melhor operadora para o seu perfil',
		site_name: siteName,
		locale: 'pt_BR',
		type: 'website',
		robots: {
			googleBot: {
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		},
		openGraph: {
			siteName,
			locale: 'pt_BR',
			type: 'website'
		}
	}
}

export default async function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const client = createClient()

	const headerDocument = await client.getSingle('header').catch(() => null)
	const footerDocument = await client.getSingle('footer').catch(() => null)

	return (
		<html lang="pt-BR" className={font.variable}>
			<body className="antialiased bg-neutral-100 text-neutral-800 flex flex-col min-h-screen overflow-x-hidden">
				<GoogleAnalytics />
				<Header headerDocument={headerDocument} />
				<div className="flex flex-col flex-1">{children}</div>
				<Footer footerDocument={footerDocument} />
				<PrismicPreview repositoryName={env.PRISMIC_REPOSITORY_NAME} />
			</body>
		</html>
	)
}
