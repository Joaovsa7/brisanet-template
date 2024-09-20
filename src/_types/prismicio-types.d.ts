import type { Content } from '@prismicio/client'

export type ArticleDocument = Content.ArticleDocument & {
	data: {
		category: Content.ArticleCategoryDocument
		author: Content.AuthorDocument
	}
}

export type LayoutDocument = Content.LayoutDocument & {
  data: {
    header: Content.HeaderDocument
    footer: Content.FooterDocument
  }
}
