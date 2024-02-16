import { Content, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

import { Button } from '~/components/button'
import { Container } from '~/components/container'

export type BannerProps = SliceComponentProps<Content.BannerSlice>

function BannerAd({ primary }: Content.BannerSliceAd) {
	return (
		<section>
			<Container size="lg">
				<PrismicNextLink field={primary.link}>
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

export default function Banner({ slice }: BannerProps) {
	const isDefaultVariation = slice.variation === 'default'
	const isAdVariation = slice.variation === 'ad'

	if (isAdVariation) {
		return <BannerAd {...slice} />
	}

	if (isDefaultVariation) {
		const titleIsFilled = isFilled.richText(slice.primary.title)
		const descriptionIsFilled = isFilled.richText(slice.primary.description)
		const ctaIsFilled =
			isFilled.keyText(slice.primary.cta_label) &&
			isFilled.link(slice.primary.cta_link)

		return (
			<section
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
				className="bg-primary"
			>
				<Container
					size="lg"
					className="min-h-96 flex flex-col items-start justify-center"
				>
					<div>
						<div>
							<div className="max-w-2xl">
								{titleIsFilled && (
									<span className="text-4xl md:text-5xl text-white font-semibold mb-6 tracking-tighter block">
										<PrismicRichText field={slice.primary.title} />
									</span>
								)}
								{descriptionIsFilled && (
									<span className="text-white text-lg font-medium mb-8 block">
										<PrismicRichText field={slice.primary.description} />
									</span>
								)}
							</div>
							{ctaIsFilled && (
								<Button size="lg" variant="secondary" asChild>
									<PrismicNextLink field={slice.primary.cta_link}>
										{slice.primary.cta_label}
									</PrismicNextLink>
								</Button>
							)}
						</div>
					</div>
				</Container>
			</section>
		)
	}
}
