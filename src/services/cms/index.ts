import { getArticleByUid } from './get-article-by-uid'
import { getArticles } from './get-articles'
import { getAuthorByUid } from './get-author-by-uid'
import { getAuthors } from './get-authors'
import { getBlog } from './get-blog'
import { getHome } from './get-home'
import { getPageByUid } from './get-page-by-uid'

export const cmsService = {
	getHome,
	getPageByUid,
	getAuthors,
	getBlog,
	getAuthorByUid,
	getArticleByUid,
	getArticles
}
