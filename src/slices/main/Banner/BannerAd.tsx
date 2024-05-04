import type { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'

import { Container } from '~/components/container'

export function BannerAd({ primary }: Content.BannerSliceAd) {
	return (
		<section>
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
