import { Content, filter } from '@prismicio/client'
import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { createClient, fetchLinks } from '~/libs/prismicio'

import { Article } from '~/templates/Blog'

interface IPageProps {
	params: {
		slug: string
	}
}

export async function generateMetadata(
	{ params }: IPageProps,
	parent: ResolvingMetadata
) {
	try {
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
				url,
				images: {
					url: document.data.image.url,
					width: 1200,
					height: 720,
					alt: document.data.image.alt
				}
			},
			alternates: {
				canonical: url
			}
		}
	} catch {
		return notFound()
	}
}

export type IArticleDocumentResponse = Content.ArticleDocument & {
	data: {
		category: {
			data: Pick<Content.ArticleCategoryDocumentData, 'name'>
		}
		author: Content.AuthorDocument & {
			data: Pick<Content.AuthorDocumentData, 'name' | 'avatar' | 'position'>
		}
	}
}

export default async function ArticlePage({ params }: IPageProps) {
	try {
		const articleUid = params.slug

		const client = createClient()

		const document = await client.getByUID<IArticleDocumentResponse>(
			'article',
			articleUid,
			{ fetchLinks }
		)

		const relatedArticles = await client
			.getAllByType<IArticleDocumentResponse>('article', {
				fetchLinks,
				filters: [filter.at('my.article.author', document.data?.author?.id)],
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc'
				},
				limit: 4
			})
			.catch(() => [])

		return <Article document={document} relatedArticles={relatedArticles} />
	} catch {
		return notFound()
	}
}
