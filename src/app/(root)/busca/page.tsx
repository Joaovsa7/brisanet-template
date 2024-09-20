import { filter, isFilled } from '@prismicio/client'
import { IconCalendar } from '@tabler/icons-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { prismicio } from '~/libs/prismicio'

import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'

import type { ArticleDocument, PageDocument } from '../../../../prismicio-types'

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

	const { results, total_results_size } = await prismicio.get<
		ArticleDocument | PageDocument
	>({
		filters: [
			filter.any('document.type', ['page', 'article']),
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
						<section className="grid gap-8 max-w-3xl">
							{results.map((result) => {
								const metaTitleIsFilled = isFilled.keyText(
									result.data.meta_title
								)
								const { url } = result

								if (!metaTitleIsFilled || !url) {
									return null
								}

								return (
									<Link
										key={result.id}
										href={`${url.replaceAll('--', '/')}`}
										className="flex flex-col gap-2 group"
									>
										<h3 className="font-bold text-primary group-hover:underline">
											{result.data.meta_title}
										</h3>
										<p className="text-sm text-neutral-500 font-medium mb-2 line-clamp-2">
											{result.data.meta_description}
										</p>
										<time
											dateTime={result.last_publication_date}
											className="flex items-center gap-1.5 text-sm text-neutral-500"
										>
											<IconCalendar className="w-4 h-4" />
											Atualizado em:{' '}
											{new Date(
												`${result.last_publication_date}`
											).toLocaleDateString('pt-BR', {
												dateStyle: 'long'
											})}
										</time>
									</Link>
								)
							})}
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
