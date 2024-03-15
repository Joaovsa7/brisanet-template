import { createClient } from '~/libs/prismicio'

import { env } from '~/config/env'

import { Suspense } from 'react'
import { ConversionBar } from '~/components/conversion-bar'
import { Footer } from '~/components/footer'
import { GoogleAnalytics } from '~/components/google-analytics'
import { Header } from '~/components/header'

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

export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	const client = createClient()

	const headerDocument = await client.getSingle('header').catch(() => null)
	const footerDocument = await client.getSingle('footer').catch(() => null)

	return (
		<div className="bg-neutral-100 text-neutral-800 flex flex-col min-h-screen overflow-x-hidden">
			<GoogleAnalytics />
			<Suspense fallback={<p>Carregando...</p>}>
				<Header headerDocument={headerDocument} />
				<div className="flex flex-col flex-1">{children}</div>
				<ConversionBar />
				<Footer footerDocument={footerDocument} />
			</Suspense>
		</div>
	)
}
