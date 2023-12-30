import { SliceZone } from '@prismicio/react'
import Link from 'next/link'

import { ArticleCard } from '~/components/article-card'
import { Container } from '~/components/container'
import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import { IArticleDocumentResponse } from '~/app/blog/[slug]/page'
import { BlogDocument } from '../../../prismicio-types'

interface IBlogProps {
	document: BlogDocument
	articles: IArticleDocumentResponse[]
}

export function Blog({ articles, document }: IBlogProps) {
	return (
		<main>
			<PageInfo updatedAt={document.last_publication_date} />
			<section className="py-12">
				<Container size="lg">
					<h1 className="mb-6 text-3xl font-bold">Últimos artigos</h1>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{articles.map((article) => {
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
}
