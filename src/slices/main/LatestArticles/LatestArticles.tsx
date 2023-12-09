import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Section } from '~/components/section'

export type LatestArticlesProps =
	SliceComponentProps<Content.LatestArticlesSlice>

export default function LatestArticles({ slice }: LatestArticlesProps) {
	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for latest_articles (variation: {slice.variation})
			Slices
		</Section>
	)
}
