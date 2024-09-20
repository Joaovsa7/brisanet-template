import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { env } from '~/config/env'

import { cmsService } from '~/services/cms'

import { Blog } from '~/templates/Blog'

export async function generateMetadata(_: unknown, parent: ResolvingMetadata) {
	try {
		const document = await cmsService.getBlog()

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

		const url = `${env.BASE_URL}/blog`

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

export default async function BlogPage() {
	try {
		const [document, articleDocuments] = await Promise.all([
			cmsService.getBlog(),
			cmsService.getArticles()
		])

		return <Blog document={document} articles={articleDocuments} />
	} catch {
		return notFound()
	}
}
