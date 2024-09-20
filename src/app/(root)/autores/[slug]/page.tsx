import { filter } from '@prismicio/client'
import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { fetchLinks, prismicio } from '~/libs/prismicio'

import { env } from '~/config/env'

import { cmsService } from '~/services/cms'

import { Author } from '~/templates/Authors'

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

		const document = await cmsService.getAuthorByUid(slug)

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `${env.BASE_URL}/autores/${slug}`

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
	} catch {
		return notFound()
	}
}

export default async function AuthorPage({ params }: IPageProps) {
	try {
		const { slug } = params

		const [document, otherAuthorDocuments] = await Promise.all([
			cmsService.getAuthorByUid(slug),
			cmsService.getAuthors()
		])

		const authorArticleDocuments =
			await prismicio.getAllByType<ArticleDocument>('article', {
				fetchLinks,
				filters: [filter.at('my.article.author', document.id)],
				orderings: {
					field: 'document.first_publication_date',
					direction: 'desc'
				}
			})

		return (
			<Author
				document={document}
				authorArticles={authorArticleDocuments}
				otherAuthors={otherAuthorDocuments}
			/>
		)
	} catch {
		return notFound()
	}
}
