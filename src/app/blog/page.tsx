import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleCard } from '~/components/article-card'
import { Container } from '~/components/container'
import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import { createClient, fetchLinks } from '~/libs/prismicio'
import { IArticleDocumentResponse } from './[slug]/page'

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

		return (
			<main>
				<PageInfo updatedAt={document.last_publication_date} />
				<section className="py-12">
					<Container size="lg">
						<h1 className="mb-6 text-3xl font-bold">Últimos artigos</h1>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{articleDocuments.map((article) => {
								return (
									<Link
										key={article.id}
										href={`/blog/${article.uid}`}
										className="flex"
									>
										<ArticleCard article={article} />
									</Link>
								)
							})}
						</div>
					</Container>
				</section>

				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
