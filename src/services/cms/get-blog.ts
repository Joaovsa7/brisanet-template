import { cache } from 'react'

import { fetchLinks, prismicio } from '~/libs/prismicio'

export const getBlog = cache(async () => {
	const document = await prismicio.getSingle('blog', {
		fetchLinks
	})

	return document
})
