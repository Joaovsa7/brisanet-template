import { asText, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import { IArticleDocumentResponse } from '~/app/blog/[slug]/page'

export function ArticleCard({
	article
}: { article: IArticleDocumentResponse }) {
	return (
		<article className="flex flex-col shadow-md overflow-hidden rounded-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
			<div className="aspect-video">
				<PrismicNextImage
					field={article.data.image}
					className="aspect-video"
					width={600}
					height={337.5}
					quality={80}
				/>
			</div>

			<div className="flex-1 flex flex-col p-4">
				<div className="flex items-center justify-between text-sm mb-4">
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

				<h2 className="flex-1 font-semibold transition-colors">
					{asText(article.data.title)}
				</h2>
			</div>
		</article>
	)
}
