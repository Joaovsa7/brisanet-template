import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { createClient } from '~/libs/prismicio'

import { PageInfo } from '~/components/page-info'

import { mainSlices } from '~/slices'

export default async function AuthorsPage() {
	try {
		const client = createClient()

		const document = await client.getSingle('authors')

		return (
			<main>
        <PageInfo updatedAt={document.last_publication_date} />
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
