import { filter } from '@prismicio/client'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { ArticleCard } from '~/components/article-card'

import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { createClient } from '~/libs/prismicio'
import { IArticleDocumentResponse } from '../blog/[slug]/page'

interface IPageProps {
	searchParams: {
		q: string
	}
}

export default async function SearchPage({ searchParams }: IPageProps) {
	const { q: query } = searchParams

	if (!query) {
		redirect('/')
	}

	const client = createClient()

	const { results, total_results_size } =
		await client.get<IArticleDocumentResponse>({
			filters: [
				filter.at('document.type', 'article'),
				filter.fulltext('document', query)
			]
		})

	return (
		<main className="py-8">
			<Container size="lg">
				<Breadcrumb className="mb-10" />

				{results.length > 0 ? (
					<>
						<span className="mb-8 block">
							{total_results_size}{' '}
							{total_results_size > 1
								? 'resultados encontrados'
								: 'resultado encontrado'}
						</span>
						<section>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{results.map((article) => {
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
						</section>
					</>
				) : (
					<section>
						<span className="mb-8 block">
							Nenhum resultado encontrado para a busca por{' '}
							<strong>{query}</strong>
						</span>
					</section>
				)}
			</Container>
		</main>
	)
}
