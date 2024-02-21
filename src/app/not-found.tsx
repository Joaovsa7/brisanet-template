import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '~/components/button'
import { Container } from '~/components/container'

import { env } from '~/config/env'

export const metadata: Metadata = {
	title: 'Página não encontrada',
	robots: 'noindex, nofollow',
	alternates: {
		canonical: `${env.BASE_URL}/not-found`
	}
}

export default function NotFoundPage() {
	return (
		<main className="flex-1 flex place-items-center py-16">
			<Container className="text-center">
				<h1 className="text-2xl md:text-4xl font-bold mb-4">
					Página não encontrada
				</h1>
				<p className="md:text-lg font-medium mb-8">
					A página que você está tentando acessar provavelmente foi alterada ou
					removida.
				</p>
				<Button asChild>
					<Link href="/" prefetch={false}>
						Retornar à Home
					</Link>
				</Button>
			</Container>
		</main>
	)
}
