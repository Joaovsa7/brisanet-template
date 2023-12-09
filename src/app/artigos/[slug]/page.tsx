import { PrismicNextImage } from '@prismicio/next'
import { SliceZone } from '@prismicio/react'
import { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { mainSlices } from '~/slices'

import { createClient, fetchLinks } from '~/libs/prismicio'

interface IArticlePage {
	params: {
		slug: string
	}
}

export async function generateMetadata(
	{ params }: IArticlePage,
	parent: ResolvingMetadata
) {
	const parentMetadata = await parent

	const client = createClient()

	const document = await client.getByUID('article', params.slug, {
		fetchLinks
	})

	const { meta_title, meta_description, robots_follow, robots_index } =
		document.data

	const url = `https://${process.env.HOST}/artigos`

	return {
		title: meta_title,
		description: meta_description,
		robots: {
			...parentMetadata.robots,
			index: robots_index,
			follow: robots_follow
		},
		openGraph: {
			...parentMetadata.openGraph,
			title: meta_title,
			description: meta_description,
			url
		}
	}
}

export default async function ArticlePage({ params }: IArticlePage) {
	try {
		const articleUid = params.slug

		const client = createClient()

		const document = await client.getByUID('article', articleUid)

		return (
			<Container
				size="lg"
				className="grid xl:grid-cols-app gap-10 py-4 sm:p-6 md:py-12"
			>
				<main>
					<Breadcrumb items={document.data.breadcrumb_items} />

					<RichText field={document.data.title} className="my-4 md:my-8" />

					<div className="flex items-center justify-between flex-wrap gap-1 text-neutral-700 text-sm md:text-base">
						<time
							dateTime={new Date(
								`${document.first_publication_date}`
							).toISOString()}
						>
							Última atualização:{' '}
							{new Date(
								`${document.first_publication_date}`
							).toLocaleDateString('pt-BR', {
								dateStyle: 'long'
							})}
						</time>

						<span>{document.data.reading_time}min de leitura</span>
					</div>
					<div className="mt-4 lg:mt-8">
						<PrismicNextImage
							field={document.data.image}
							width={1200}
							height={628}
							quality={100}
						/>
					</div>

					<SliceZone slices={document.data.slices} components={mainSlices} />
				</main>
				<aside />
			</Container>
		)
	} catch {
		return notFound()
	}
}
