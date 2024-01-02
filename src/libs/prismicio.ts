import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from '../../slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
	process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
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
	}
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		fetchOptions:
			process.env.NODE_ENV === 'production'
				? {
						next: { tags: ['prismic'], revalidate: 60 * 60 },
						cache: 'force-cache'
				  }
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

export const fetchLinks = [
	'author.avatar',
	'author.name',
	'author.position',
	'article_category.name',
	'article_category.color',
	'call_to_action.content',
	'call_to_action.cta_link',
	'call_to_action.cta_label',
	'faq.title',
	'faq.frequently_asked_questions',
	'table.slices',
	'most_read_articles.articles'
]
