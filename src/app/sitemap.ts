import { env } from '~/config/env'
import { createClient } from '~/libs/prismicio'

export default async function sitemap() {
	const client = createClient()

	const [authorPages, articlePages, blogPage, homePage, pages] =
		await Promise.allSettled([
			client.getAllByType('author'),
			client.getAllByType('article'),
			client.getSingle('blog'),
			client.getSingle('home'),
			client.getAllByType('page')
		])

	const sitemaps = []

	if (homePage.status === 'fulfilled' && homePage.value.data.robots_index) {
		sitemaps.push({
			url: env.BASE_URL,
			lastModified: new Date(
				homePage.value.last_publication_date
			).toISOString(),
			changeFrequency: 'weekly',
			priority: 0.9
		})
	}

	if (blogPage.status === 'fulfilled' && blogPage.value.data.robots_index) {
		sitemaps.push({
			url: `${env.BASE_URL}/blog`,
			lastModified: new Date(
				blogPage.value.last_publication_date
			).toISOString(),
			changeFrequency: 'weekly',
			priority: 0.9
		})
	}

	if (articlePages.status === 'fulfilled') {
		const articlesSitemap = articlePages.value
			.filter((document) => document.data.robots_index)
			.map((document) => ({
				url: `${env.BASE_URL}/blog/${document.uid}`,
				lastModified: new Date(document.last_publication_date).toISOString(),
				changeFrequency: 'weekly',
				priority: 0.9
			}))

		sitemaps.push(...articlesSitemap)
	}

	if (pages.status === 'fulfilled') {
		const articlesSitemap = pages.value
			.filter((document) => document.data.robots_index)
			.map((document) => ({
				url: `${env.BASE_URL}/${document.uid.replaceAll('--', '/')}`,
				lastModified: new Date(document.last_publication_date).toISOString(),
				changeFrequency: 'weekly',
				priority: 0.9
			}))

		sitemaps.push(...articlesSitemap)
	}

	if (authorPages.status === 'fulfilled') {
		const authorsSitemap = authorPages.value
			.filter((document) => document.data.robots_index)
			.map((document) => ({
				url: `${env.BASE_URL}/autores/${document.uid}`,
				lastModified: new Date(document.last_publication_date).toISOString(),
				changeFrequency: 'weekly',
				priority: 0.9
			}))

		sitemaps.push(...authorsSitemap)
	}

	return sitemaps
}
