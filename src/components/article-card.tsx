import { asText, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import type { IArticleDocumentResponse } from '~/app/(root)/blog/[slug]/page'

export function ArticleCard({
	article
}: { article: IArticleDocumentResponse }) {
	return (
		<article className="group flex flex-col overflow-hidden">
			<div className="aspect-video">
				<PrismicNextImage
					field={article.data.image}
					width={600}
					height={337.5}
					quality={80}
					className="aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>

			<div className="flex-1 flex flex-col py-3">
				<div className="flex items-center justify-between text-sm mb-2 uppercase font-medium text-neutral-500">
					{isFilled.contentRelationship(article.data.category) &&
						isFilled.richText(article.data.category.data?.name) && (
							<span>{asText(article.data.category.data.name)}</span>
						)}
					<time
						dateTime={new Date(
							`${article.first_publication_date}`
						).toISOString()}
						className="ml-auto"
					>
						{new Date(`${article.first_publication_date}`).toLocaleDateString(
							'pt-BR',
							{
								dateStyle: 'medium'
							}
						)}
					</time>
				</div>

				<h2 className="flex-1 font-bold transition-colors group-hover:text-primary">
					{asText(article.data.title)}
				</h2>
			</div>
		</article>
	)
}
