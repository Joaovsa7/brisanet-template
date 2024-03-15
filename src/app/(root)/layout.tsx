import { Metadata } from 'next'
import { Suspense } from 'react'

import { env } from '~/config/env'

import { ConversionBar } from '~/components/conversion-bar'
import { Footer } from '~/components/footer'
import { GoogleAnalytics } from '~/components/google-analytics'
import { Header } from '~/components/header'

export const metadata: Metadata = {
	title: {
		default: env.NEXT_PUBLIC_SITE_NAME,
		template: `%s | ${env.NEXT_PUBLIC_SITE_NAME}`
	},
	description: 'Encontre a melhor operadora para o seu perfil',
	robots: {
		googleBot: {
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	openGraph: {
		siteName: env.NEXT_PUBLIC_SITE_NAME,
		locale: 'pt_BR',
		type: 'website'
	}
}

export default function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="bg-neutral-100 text-neutral-800 flex flex-col min-h-screen overflow-x-hidden">
			<GoogleAnalytics />
			<Suspense fallback={null}>
				<Header />
				<div className="flex flex-col flex-1">{children}</div>
				<ConversionBar />
				<Footer />
			</Suspense>
		</div>
	)
}
