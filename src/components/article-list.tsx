import { Content, asText } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

import { Container } from './container'

type Article = Content.ArticleDocument & {
	data: {
		author: {
			data: Pick<Content.AuthorDocumentData, 'avatar' | 'name'>
		}
	}
}

interface IArticleList {
	articles: Article[]
}

export function ArticleList({ articles }: IArticleList) {
	return (
		<section className="py-10">
			<Container size="lg" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{articles.map((article) => (
					<Link
						key={article.id}
						href={`/artigos/${article.uid}`}
						className="flex"
					>
						<article className="flex flex-col group shadow-xl overflow-hidden rounded-lg">
							<PrismicNextImage
								field={article.data.image}
								className="aspect-video"
							/>

							<div className="flex-1 flex flex-col p-4 lg:p-6">
								<h2 className="flex-1 font-semibold md:text-lg group-hover:text-primary-500 transition-colors">
									<Link href={`/artigos/${article.uid}`}>
										{asText(article.data.title)}
									</Link>
								</h2>

								<div className="flex items-center justify-between mt-5">
									<time
										dateTime={new Date(
											`${article.first_publication_date}`
										).toISOString()}
									>
										{new Date(
											`${article.first_publication_date}`
										).toLocaleDateString('pt-BR', {
											dateStyle: 'medium'
										})}
									</time>
									<span>{article.data.reading_time}min de leitura</span>
								</div>
							</div>
						</article>
					</Link>
				))}
			</Container>
		</section>
	)
}
