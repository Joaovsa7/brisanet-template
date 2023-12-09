import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { createClient } from '~/libs/prismicio'

import { mainSlices } from '~/slices'

interface IAuthorPage {
	params: {
		slug: string
	}
}

export default async function AuthorPage({ params }: IAuthorPage) {
	try {
		const authorUid = params.slug

		const client = createClient()

		const document = await client.getByUID('author', authorUid)

		return (
			<main>
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
