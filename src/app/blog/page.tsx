import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation'

import { ArticleList } from '~/components/article-list'
import { Breadcrumb } from '~/components/breadcrumb'
import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import { createClient, fetchLinks } from '~/libs/prismicio'

export default async function BlogPage() {
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
        <PageInfo updatedAt={document.last_publication_date} />
				<ArticleList articles={articleDocuments} />
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		)
	} catch {
		return notFound()
	}
}
