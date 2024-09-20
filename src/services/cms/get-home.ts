import { cache } from 'react'
import { fetchLinks, prismicio } from '~/libs/prismicio'

export const getHome = cache(async () => {
	const document = await prismicio.getSingle('home', {
		fetchLinks
	})

	return document
})
