import { cache } from 'react'

import type { ArticleDocument } from '~/_types/prismicio-types'

import { prismicio } from '~/libs/prismicio'

export const getArticles = cache(async () => {
	const document = await prismicio.getAllByType<ArticleDocument>('article', {
		orderings: {
			field: 'document.first_publication_date',
			direction: 'desc'
		}
	})

	return document
})
