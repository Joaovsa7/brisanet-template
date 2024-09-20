import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { env } from '~/config/env'

import { cmsService } from '~/services/cms'

import { Authors } from '~/templates/Authors'

export const metadata: Metadata = {
	title: `${env.NEXT_PUBLIC_SITE_NAME} | Autores`,
	robots: 'index, follow',
	alternates: {
		canonical: `${env.BASE_URL}/autores`
	}
}

export default async function AuthorsPage() {
	try {
		const authorDocuments = await cmsService.getAuthors()

		return <Authors authors={authorDocuments} />
	} catch {
		return notFound()
	}
}
