import { ResolvingMetadata } from 'next'

import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { Home } from '~/templates/Home'

export async function generateMetadata(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	_: any,
	parent: ResolvingMetadata
) {
	try {
		const client = createClient()

		const document = await client.getSingle('home', {
			fetchLinks
		})

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `https://${process.env.HOST}`

		const parentMetadata = await parent

		return {
			title: meta_title,
			description: meta_description,
			robots: {
				...parentMetadata.robots,
				index: robots_index,
				follow: robots_follow
			},
			openGraph: {
				...parentMetadata.openGraph,
				title: meta_title,
				description: meta_description,
				url
			},
			alternates: {
				canonical: url
			}
		}
	} catch {
		return notFound()
	}
}

export default async function HomePage() {
	try {
		const client = createClient()

		const document = await client.getSingle('home', { fetchLinks })

		return <Home document={document} />
	} catch {
		return notFound()
	}
}
