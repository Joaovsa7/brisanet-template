import { type Content, filter } from '@prismicio/client'
import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { env } from '~/config/env'

import { fetchLinks, prismicio } from '~/libs/prismicio'

import { cmsService } from '~/services/cms'

import { Article } from '~/templates/Blog'

interface IPageProps {
	params: {
		slug: string
	}
}

export async function generateStaticParams() {
	try {
		const document = await prismicio.getSingle<
			Content.MostReadArticlesDocument & {
				data: {
					articles: {
						article: Pick<Content.ArticleDocument, 'uid'>
					}[]
				}
			}
		>('most_read_articles')

		return document.data.articles.map((article) => ({
			slug: article.article.uid
		}))
	} catch {
		return []
	}
}

export async function generateMetadata(
	{ params }: IPageProps,
	parent: ResolvingMetadata
) {
	try {
		const { slug } = params

		const document = await cmsService.getArticleByUid(slug)

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `${env.BASE_URL}/blog/${slug}`

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

export default async function ArticlePage({ params }: IPageProps) {
	try {
		const { slug } = params

		const document = await cmsService.getArticleByUid(slug)

		const relatedArticles = await prismicio
			.getAllByType<ArticleDocument>('article', {
				fetchLinks,
				filters: [
					filter.not('document.id', document.id),
					filter.at('my.article.author', document.data?.author?.id)
				],
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
