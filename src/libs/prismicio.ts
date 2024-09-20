import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

import { env } from '~/config/env'

const routes: prismic.ClientConfig['routes'] = [
	{
		type: 'home',
		path: '/'
	},
	{
		type: 'author',
		path: '/autores/:uid'
	},
	{
		type: 'blog',
		path: '/blog'
	},
	{
		type: 'article_category',
		path: '/blog/categorias/:uid'
	},
	{
		type: 'article',
		path: '/blog/:uid'
	},
	{
		type: 'page',
		path: '/:uid'
	}
]

const createClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(env.PRISMIC_REPOSITORY_NAME, {
		accessToken: env.PRISMIC_ACCESS_TOKEN,
		routes,
		fetchOptions:
			process.env.NODE_ENV === 'production'
				? { next: { tags: ['@brisanet/prismic-tag'] }, cache: 'force-cache' }
				: { next: { revalidate: 5 } },
		...config
	})

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req
	})

	return client
}

export const prismicio = createClient()

export const fetchLinks = [
	'author.avatar',
	'author.name',
	'author.position',
	'article_category.name',
	'article_category.color',
	'call_to_action.title',
	'call_to_action.cta_link',
	'call_to_action.cta_label',
	'faq.title',
	'faq.frequently_asked_questions',
	'most_read_articles.articles',
	'product.name',
	'product.benefits',
	'product.price',
	'product.is_promotion',
	'sidebar_banner.banner',
	'sidebar_banner.link',
	'slices.slices',
	'slice_group.slices'
]
