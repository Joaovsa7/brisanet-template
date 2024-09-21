import type { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import { Container } from '~/components/container'

type BannerAdProps = Content.BannerSliceAd & {
	slice_type: string
}

export function BannerAd({ primary, slice_type, variation }: BannerAdProps) {
	return (
		<section data-slice-type={slice_type} data-slice-variation={variation}>
			<Container size="lg">
				<PrismicNextLink field={primary.link} prefetch={false}>
					<PrismicNextImage
						field={primary.banner}
						width={1280}
						height={576}
						quality={100}
						fallbackAlt=""
						loading="eager"
					/>
				</PrismicNextLink>
			</Container>
		</section>
	)
}
