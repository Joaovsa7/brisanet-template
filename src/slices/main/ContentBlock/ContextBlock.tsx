import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'

export type ContentBlockProps = SliceComponentProps<Content.ContentBlockSlice>

export default function ContentBlock({ slice }: ContentBlockProps) {
	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<RichText field={slice.primary.content} />
			</Container>
		</Section>
	)
}
