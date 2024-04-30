import type { ResolvingMetadata } from 'next'

import { notFound } from 'next/navigation'

import { env } from '~/config/env'

import { cmsService } from '~/services/cms'

import { Home } from '~/templates/Home'

export async function generateMetadata(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	_: any,
	parent: ResolvingMetadata
) {
	try {
		const document = await cmsService.getHome()

		const { meta_title, meta_description, robots_follow, robots_index } =
			document.data

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
				url: env.BASE_URL
			},
			alternates: {
				canonical: env.BASE_URL
			}
		}
	} catch {
		return notFound()
	}
}

export default async function HomePage() {
	try {
		const document = await cmsService.getHome()

		return <Home document={document} />
	} catch {
		return notFound()
	}
}
