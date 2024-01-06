import { isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import {
	EmailIcon,
	FacebookIcon,
	InstapaperIcon,
	LinkedinIcon
} from 'react-share'

import { IArticleDocumentResponse } from '~/app/blog/[slug]/page'
import { ArticleCard } from '~/components/article-card'
import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { PageInfo } from '~/components/page-info'
import { RichText } from '~/components/rich-text'

import { AuthorDocument } from '../../../prismicio-types'

const icons = {
	Facebook: <FacebookIcon />,
	Email: <EmailIcon />,
	LinkedIn: <LinkedinIcon />,
	Instagram: <InstapaperIcon />,
	YouTube: <InstapaperIcon />
}

interface IAuthorProps {
	document: AuthorDocument
	authorArticles: IArticleDocumentResponse[]
	otherAuthors: AuthorDocument[]
}

export function Author({
	authorArticles,
	document,
	otherAuthors
}: IAuthorProps) {
	const articlesIsPopulated = authorArticles.length > 0
	const authorsIsPopulated = otherAuthors.length > 0

	const bioIsFilled = isFilled.richText(document.data.bio)
	const socialNetworksIsFilled = isFilled.group(document.data.social_networks)

	return (
		<main className="py-8">
			<PageInfo updatedAt={document.last_publication_date} />
			<Container size="lg">
				<Breadcrumb className="mb-10" />

				<section>
					<div className="flex items-center gap-6">
						<PrismicNextImage
							field={document.data.avatar}
							height={360}
							width={360}
							className="w-24 h-24 rounded-full"
						/>

						<div>
							<h1 className="text-4xl font-bold tracking-tight">
								{document.data.name}
							</h1>
							<p className="font-medium text-lg mt-1 block">
								{document.data.position}
							</p>
						</div>
					</div>

					{bioIsFilled && (
						<>
							<h3 className="text-xl font-bold mt-8">Sobre o autor(a)</h3>

							<RichText field={document.data.bio} className="block" />
						</>
					)}

					{socialNetworksIsFilled && (
						<>
							<h3 className="text-xl font-bold mt-8">
								Fale com {document.data.name}
							</h3>

							<ul className="mt-4">
								{document.data.social_networks.map((socialNetwork) => {
									if (!socialNetwork.name) {
										return null
									}

									return (
										<li key={socialNetwork.name}>
											<PrismicNextLink
												field={socialNetwork.link}
												className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 hover:-translate-y-0.5"
											>
												{icons[socialNetwork.name]}
											</PrismicNextLink>
										</li>
									)
								})}
							</ul>
						</>
					)}
				</section>

				{articlesIsPopulated && (
					<section className="my-16">
						<h2 className="mb-8 text-3xl font-bold tracking-tight">
							Artigos mais recentes
						</h2>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{authorArticles.map((article) => {
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
				)}

				{authorsIsPopulated && (
					<section>
						<h2 className="mb-8 text-3xl font-bold tracking-tight">
							Conheça nossos autores
						</h2>

						<div className="grid gap-6 grid-cols-2 sm:lg-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
							{otherAuthors.map((author) => {
								return (
									<Link
										key={author.id}
										href={`/autores/${author.uid}`}
										className="bg-neutral-100 flex flex-col items-center justify-center text-center px-6 py-8 rounded-md hover:bg-neutral-200 transition-colors"
									>
										<PrismicNextImage
											field={author.data.avatar}
											width={88}
											height={88}
											className="rounded-full"
										/>

										<dl>
											<dt className="text-xl font-bold mt-4">
												{author.data.name}
											</dt>
											<dd className="font-medium">{author.data.position}</dd>
										</dl>
									</Link>
								)
							})}
						</div>
					</section>
				)}
			</Container>
		</main>
	)
}
