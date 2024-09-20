import { cache } from 'react'

import { fetchLinks, prismicio } from '~/libs/prismicio'

export const getAuthorByUid = cache(async (uid: string) => {
	const document = await prismicio.getByUID('author', uid, {
		fetchLinks
	})

	return document
})
