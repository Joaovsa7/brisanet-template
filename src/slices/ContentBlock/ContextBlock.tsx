import { type Content, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'

export type ContentBlockProps = SliceComponentProps<Content.ContentBlockSlice>

export default function ContentBlock({ slice }: ContentBlockProps) {
	const banner = slice.primary
		.banner as unknown as Content.SidebarBannerDocument

	const bannerIsFilled = isFilled.contentRelationship(slice.primary.banner)

	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container
				size="lg"
				className="grid lg:grid-cols-[1fr_384px] gap-8 relative"
			>
				<RichText field={slice.primary.content} />

				{bannerIsFilled && (
					<PrismicNextLink
						field={banner.data.link}
						prefetch={false}
						aria-label="Anúncio"
					>
						<PrismicNextImage
							field={banner.data.banner}
							width={384}
							fallbackAlt=""
							className="sticky top-28 hidden lg:block"
						/>
					</PrismicNextLink>
				)}
			</Container>
		</Section>
	)
}
