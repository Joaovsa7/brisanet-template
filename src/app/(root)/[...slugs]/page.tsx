import type { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { Breadcrumb } from '~/components/breadcrumb'
import { Container } from '~/components/container'
import { GoogleStructuredData } from '~/components/google-structured-data'
import { PageInfo } from '~/components/page-info'
import { components } from '~/slices'

import { env } from '~/config/env'
import { prismicio } from '~/libs/prismicio'
import { cmsService } from '~/services/cms'

interface IPageProps {
	params: {
		slugs: string[]
	}
}

export async function generateStaticParams() {
	try {
		const document = await prismicio.getSingle<
			Content.MostVisitedPagesDocument & {
				data: {
					pages: {
						page: Pick<Content.PageDocument, 'uid'>
					}[]
				}
			}
		>('most_visited_pages')

		return document.data.pages.map((page) => ({
			slugs: page.page.uid.split('--')
		}))
	} catch {
		return []
	}
}

export async function generateMetadata(
	{ params }: IPageProps,
	parent: ResolvingMetadata
) {
	try {
		const { slugs } = params
		const uid = slugs.join('--')

		const document = await cmsService.getPageByUid(uid)

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `${env.BASE_URL}/${slugs.join('/')}`

		const parentMetadata = await parent

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
			},
			alternates: {
				canonical: url
			}
		}
	} catch {
		return notFound()
	}
}

export default async function Page({ params }: IPageProps) {
	try {
		const { slugs } = params
		const uid = slugs.join('--')

		const document = await cmsService.getPageByUid(uid)

		console.log(JSON.stringify(document))

		return (
			<main>
				<PageInfo updatedAt={document.last_publication_date} />
				<GoogleStructuredData data={document.data.google_structured_data} />
				<Container size="lg" className="py-4">
					<Breadcrumb />
				</Container>
				<SliceZone slices={document.data.slices} components={components} />
			</main>
		)
	} catch {
		return notFound()
	}
}
