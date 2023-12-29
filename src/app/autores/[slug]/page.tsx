import { SliceZone } from '@prismicio/react'
import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { PageInfo } from '~/components/page-info'

import { mainSlices } from '~/slices'

interface IPageProps {
	params: {
		slug: string
	}
}

export async function generateMetadata(
	{ params }: IPageProps,
	parent: ResolvingMetadata
) {
	const { slug } = params

	const client = createClient()

	const document = await client.getByUID('article', slug, {
		fetchLinks
	})

	const { meta_title, meta_description, robots_follow, robots_index } =
		document.data

	const url = `https://${process.env.HOST}/blog/${slug}`

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
		}
	}
}

export default async function AuthorPage({ params }: IPageProps) {
	try {
		const { slug } = params

		const client = createClient()

		const document = await client.getByUID('author', slug)

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
