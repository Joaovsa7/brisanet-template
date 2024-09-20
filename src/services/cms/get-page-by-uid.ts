import { cache } from 'react'

import { fetchLinks, prismicio } from '~/libs/prismicio'

export const getPageByUid = cache(async (uid: string) => {
	const document = await prismicio.getByUID('page', uid, {
		fetchLinks
	})

	return document
})
