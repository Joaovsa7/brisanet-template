import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { IArticleDocumentResponse } from './[slug]/page'

import { Blog } from '~/templates/Blog'

export async function generateMetadata(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	_: any,
	parent: ResolvingMetadata
) {
	try {
		const client = createClient()

		const document = await client.getSingle('blog', {
			fetchLinks
		})

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `https://${process.env.HOST}/blog`

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

export default async function BlogPage() {
	try {
		const client = createClient()

		const [document, articleDocuments] = await Promise.all([
			client.getSingle('blog'),
			client.getAllByType<IArticleDocumentResponse>('article', {
				fetchLinks,
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc'
				}
			})
		])

		return <Blog document={document} articles={articleDocuments} />
	} catch {
		return notFound()
	}
}
