import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { ArticleList } from '~/components/article-list'
import { Breadcrumb } from '~/components/breadcrumb'
import { mainSlices } from '~/slices'

import { createClient, fetchLinks } from '~/libs/prismicio'

export default async function ArticlesPage() {
	try {
		const client = createClient()

		const [document, articleDocuments] = await Promise.all([
			client.getSingle('articles'),
			client.getAllByType<
				Content.ArticleDocument & {
					data: {
						author: {
							data: Pick<Content.AuthorDocumentData, 'avatar' | 'name'>
						}
					}
				}
			>('article', { fetchLinks })
		])

		return (
			<main>
				<Breadcrumb items={document.data.breadcrumb_items} />
				<ArticleList articles={articleDocuments} />
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
