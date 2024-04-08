import { cache } from 'react'
import { createClient, fetchLinks } from '~/libs/prismicio'

export const getHome = cache(async () => {
	const client = createClient()

	const document = await client.getSingle('home', {
		fetchLinks
	})

	return document
})
