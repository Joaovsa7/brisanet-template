import { type Content, asText } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'
import { Container } from '~/components/container'

export type HtmlBlockProps = SliceComponentProps<Content.HtmlBlockSlice>

const HtmlBlock = ({ slice }: HtmlBlockProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<div dangerouslySetInnerHTML={{ __html: asText(slice.primary.html) }} />
			</Container>
		</section>
	)
}

export default HtmlBlock
