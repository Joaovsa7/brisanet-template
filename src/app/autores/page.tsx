import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { createClient } from '~/libs/prismicio'

import { mainSlices } from '~/slices'

export default async function AuthorsPage() {
	try {
		const client = createClient()

		const document = await client.getSingle('authors')

		return (
			<main>
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
