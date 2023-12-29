import { notFound } from 'next/navigation'

import { createClient } from '~/libs/prismicio'

export default async function AuthorsPage() {
	try {
		const client = createClient()

		const authorDocuments = await client.getAllByType('author', {
			orderings: {
				// field: 'document.first_publication_date',
				field: 'my.author.name',
				direction: 'desc'
			}
		})

		return <main></main>
	} catch {
		return notFound()
	}
}
