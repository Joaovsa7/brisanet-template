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
import { brisanetService } from '~/services/brisanet'
import { getTemplatePage } from '~/services/brisanet/get-template-page-mock'
import { cmsService } from '~/services/cms'

interface IPageProps {
	params: {
		slugs: string[]
	}
}

function getCityNameFromUid(uid) {
	if (typeof uid !== 'string') {
		throw new TypeError('O UID deve ser uma string.');
	}

	// Divide o UID pelo separador '--'
	const parts = uid.split('--');

	// Verifica se o UID possui pelo menos três partes
	if (parts.length < 3) {
		throw new Error('O UID não está no formato esperado: "cobertura--estado--cidade".');
	}

	// Retorna a última parte, que é o nome da cidade
	return parts[parts.length - 1];
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

		const mostVisitedPages = document.data.pages.map((page) => ({
			slugs: page.page.uid.split('--'),
		}))

		const cities = (await brisanetService.getCoveredCities()).map((city) => ({
			slugs: ['cobertura', city.state, city.slug]
		}))

		return [...mostVisitedPages, ...cities]
	} catch {
		return []
	}
}

export async function generateMetadata(
	{ params }: IPageProps,
	parent: ResolvingMetadata
) {
	const { slugs } = params
	const uid = slugs.join('--')

	try {
		const document = await cmsService.getPageByUid(uid)

		const { meta_title, meta_description, robots_follow, robots_index } =
			document?.data || {}

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
		const isCoberturaPath = uid.includes('cobertura--')

		if (!isCoberturaPath) {
			return notFound();
		}

		const cityName = getCityNameFromUid(uid)
		const templatePage = (await brisanetService.getCoveredCities()).find((city) => city.slug === cityName);

		if (!templatePage?.id) {
			return notFound();
		}

		const document = await getTemplatePage(templatePage)

		const { meta_title, meta_description, robots_follow, robots_index } =
			document?.data || {}

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
	}
}

export default async function Page({ params }: IPageProps) {
	const { slugs } = params
	const uid = slugs.join('--')

	try {
		const document = await cmsService.getPageByUid(uid);

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
		const isCoberturaPath = uid.includes('cobertura--')

		if (!isCoberturaPath) {
			return notFound();
		}

		const cityName = getCityNameFromUid(uid)
		const templatePage = (await brisanetService.getCoveredCities()).find((city) => city.slug === cityName);

		if (!templatePage?.id) {
			return notFound();
		}

		const document = await getTemplatePage(templatePage)

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
	}
}
