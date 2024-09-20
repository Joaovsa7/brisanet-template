import { cache } from 'react'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { fetchLinks, prismicio } from '~/libs/prismicio'

export const getArticleByUid = cache(async (uid: string) => {
	const document = await prismicio.getByUID<ArticleDocument>('article', uid, {
		fetchLinks
	})

	return document
})
