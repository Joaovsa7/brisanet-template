import { createClient } from '~/libs/prismicio'

export default async function sitemap() {
	const client = createClient()

	const [authorPages, articlePages, blogPage, homePage] =
		await Promise.allSettled([
			client.getAllByType('author'),
			client.getAllByType('article'),
			client.getSingle('blog'),
			client.getSingle('home')
		])

	const sitemaps = []

	if (homePage.status === 'fulfilled' && homePage.value.data.robots_index) {
		sitemaps.push({
			url: `https://${process.env.HOST}`,
			lastModified: homePage.value.last_publication_date,
			changeFrequency: 'weekly',
			priority: 0.9
		})
	}

	if (blogPage.status === 'fulfilled' && blogPage.value.data.robots_index) {
		sitemaps.push({
			url: `https://${process.env.HOST}/blog`,
			lastModified: blogPage.value.last_publication_date,
			changeFrequency: 'weekly',
			priority: 0.9
		})
	}

	if (articlePages.status === 'fulfilled') {
		const articlesSitemap = articlePages.value
			.filter((document) => document.data.robots_index)
			.map((document) => ({
				url: `https://${process.env.HOST}/blog/${document.uid}`,
				lastModified: document.last_publication_date,
				changeFrequency: 'weekly',
				priority: 0.9
			}))

		sitemaps.push(...articlesSitemap)
	}

	if (authorPages.status === 'fulfilled') {
		const authorsSitemap = authorPages.value
			.filter((document) => document.data.robots_index)
			.map((document) => ({
				url: `https://${process.env.HOST}/autores/${document.uid}`,
				lastModified: document.last_publication_date,
				changeFrequency: 'weekly',
				priority: 0.9
			}))

		sitemaps.push(...authorsSitemap)
	}

	return sitemaps
}
