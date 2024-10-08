import { SliceZone } from '@prismicio/react'
import Link from 'next/link'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { ArticleCard } from '~/components/article-card'
import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { GoogleStructuredData } from '~/components/google-structured-data'
import { PageInfo } from '~/components/page-info'
import { components } from '~/slices'

import type { BlogDocument } from '../../../prismicio-types'

interface IBlogProps {
	document: BlogDocument
	articles: ArticleDocument[]
}

export function Blog({ articles, document }: IBlogProps) {
	return (
		<main className="py-8">
			<PageInfo updatedAt={document.last_publication_date} />
			<GoogleStructuredData data={document.data.google_structured_data} />
			<Container size="lg">
				<Breadcrumb className="mb-10" />
				<section>
					<h1 className="mb-6 text-3xl font-bold">Últimos artigos</h1>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{articles.map((article) => {
							return (
								<Link
									key={article.id}
									href={`/blog/${article.uid}`}
									prefetch={false}
									className="flex"
								>
									<ArticleCard article={article} />
								</Link>
							)
						})}
					</div>
				</section>
			</Container>

			<SliceZone slices={document.data.slices} components={components} />
		</main>
	)
}
