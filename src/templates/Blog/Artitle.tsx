import { asText, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceZone } from '@prismicio/react'
import { IconCalendar, IconClock } from '@tabler/icons-react'
import Link from 'next/link'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { ArticleCard } from '~/components/article-card'
import { ArticleShareButtons } from '~/components/article-share-buttons'
import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { GoogleStructuredData } from '~/components/google-structured-data'
import { RichText } from '~/components/rich-text'
import { components } from '~/slices'

import { env } from '~/config/env'

interface IArticleProps {
	document: ArticleDocument
	relatedArticles: ArticleDocument[]
}

export function Article({ document, relatedArticles }: IArticleProps) {
	const relatedArticlesIsPopulated = relatedArticles.length > 0

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Article',
						mainEntityOfPage: {
							'@type': 'WebPage',
							'@id': `${env.BASE_URL}/blog/${document.uid}`
						},
						headline: document.data.meta_title,
						description: document.data.meta_description,
						image: document.data.image?.url,
						author: {
							'@type': 'Person',
							name: document.data.author?.data?.name,
							url: isFilled.contentRelationship(document.data.author)
								? `${env.BASE_URL}/autores/${document.data.author.uid}`
								: ''
						},
						publisher: {
							'@type': 'Organization',
							name: env.NEXT_PUBLIC_SITE_NAME,
							logo: {
								'@type': 'ImageObject',
								url: ''
							}
						},
						datePublished: document.first_publication_date,
						dateModified: document.last_publication_date
					})
				}}
			/>

			<GoogleStructuredData data={document.data.google_structured_data} />

			<main className="py-8">
				<Container size="lg">
					<Breadcrumb className="mb-10" />

					<div className="flex flex-col gap-1 text-neutral-500 text-sm mb-4 sm:mb-6 sm:text-sm sm:flex-row sm:items-center sm:gap-4">
						<time
							dateTime={document.first_publication_date}
							className="flex items-center gap-1.5"
						>
							<IconCalendar className="w-4 h-4" />
							Atualizado em{' '}
							{new Date(`${document.last_publication_date}`).toLocaleDateString(
								'pt-BR',
								{
									dateStyle: 'long'
								}
							)}
						</time>
						<span className="flex items-center gap-1.5">
							<IconClock className="w-4 h-4" />
							{document.data.reading_time} min de leitura
						</span>
					</div>

					<RichText
						field={document.data.title}
						className="my-4 md:my-8 font-bold min-w-full w-full"
					/>

					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
						{isFilled.contentRelationship(document.data.author) && (
							<Link
								prefetch={false}
								href={`/autores/${document.data.author.uid}`}
								className="flex items-center gap-2"
							>
								<PrismicNextImage
									field={document.data.author.data.avatar}
									width={48}
									height={48}
									quality={100}
									loading="eager"
									className="rounded-full"
								/>

								<div className="flex flex-col">
									{isFilled.keyText(document.data.author.data.name) && (
										<span className="font-medium">
											{document.data.author.data.name}
										</span>
									)}

									{isFilled.keyText(document.data.author.data.position) && (
										<span className="font-medium text-sm text-neutral-400">
											{document.data.author.data.position}
										</span>
									)}
								</div>
							</Link>
						)}

						<ArticleShareButtons
							title={asText(document.data.title)}
							url={`${env.BASE_URL}/blog/${document.uid}`}
						/>
					</div>

					<div className="mt-4 lg:mt-8">
						<PrismicNextImage
							field={document.data.image}
							width={1200}
							height={720}
							quality={100}
							loading="eager"
						/>
					</div>
				</Container>

				<SliceZone slices={document.data.slices} components={components} />

				<Container>
					{relatedArticlesIsPopulated && (
						<section className="py-12">
							<h3 className="mb-6 text-2xl font-bold">Artigos relacionados</h3>

							<div className="grid gap-6 sm:grid-cols-2">
								{relatedArticles.map((article) => {
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
					)}
				</Container>
			</main>
		</>
	)
}
