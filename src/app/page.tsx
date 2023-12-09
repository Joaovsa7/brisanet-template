import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { Container } from '~/components/container'
import { mainSlices, sidebarSlices } from '~/slices'

export default async function Home() {
	try {
		const client = createClient()

		const document = await client.getSingle('home', { fetchLinks })

		return (
			<Container
				size="lg"
				className="grid xl:grid-cols-app gap-10 py-4 sm:py-6 md:py-12"
			>
				<main>
					<SliceZone slices={document.data.slices} components={mainSlices} />
				</main>
				<aside>
					<SliceZone slices={document.data.slices} components={sidebarSlices} />
				</aside>
			</Container>
		)
	} catch {
		return notFound()
	}
}
