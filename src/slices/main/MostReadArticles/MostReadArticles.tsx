import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export type MostReadArticlesProps =
	SliceComponentProps<Content.MostReadArticlesSlice>

export default function MostReadArticles({ slice }: MostReadArticlesProps) {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for most_read_articles (variation: {slice.variation}
			) Slices
		</section>
	)
}
