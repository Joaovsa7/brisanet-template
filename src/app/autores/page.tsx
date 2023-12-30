import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { createClient } from '~/libs/prismicio'

import { Authors } from '~/templates/Authors'

export const metadata: Metadata = {
	title: 'Portal das Operadoras | Autores',
	robots: 'index, follow',
	alternates: {
		canonical: 'https://portaldasoperadoras.com.br/autores'
	}
}

export default async function AuthorsPage() {
	try {
		const client = createClient()

		const authorDocuments = await client.getAllByType('author', {
			orderings: {
				field: 'document.first_publication_date',
				direction: 'desc'
			}
		})

		return <Authors authors={authorDocuments} />
	} catch {
		return notFound()
	}
}
