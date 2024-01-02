import { Content, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { tv } from 'tailwind-variants'

import { Button } from '~/components/button'
import { Container } from '~/components/container'

export type BannerProps = SliceComponentProps<Content.BannerSlice>

export default function Banner({ slice }: BannerProps) {
	const withImage = slice.variation === 'image'
	const withBackground = slice.variation === 'background'

	const { section, wrapper } = bannerStyles({ withImage, withBackground })

	const titleIsFilled = isFilled.richText(slice.primary.title)
	const descriptionIsFilled = isFilled.richText(slice.primary.description)
	const ctaIsFilled =
		isFilled.keyText(slice.primary.cta_label) &&
		isFilled.link(slice.primary.cta_link)

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={section()}
		>
			{withBackground && (
				<PrismicNextImage
					field={slice.primary.background}
					className="absolute inset-0 left-1/2 -translate-x-1/2 object-cover h-full w-full md:w-fit md:h-fit md:aspect-video"
					width={1920}
					height={1080}
					quality={100}
					fallbackAlt=""
				/>
			)}

			<Container
				size="lg"
				className="min-h-96 flex flex-col items-start justify-center"
			>
				<div className={wrapper()}>
					<div>
						<div className="max-w-2xl">
							{titleIsFilled && (
								<span className="text-4xl md:text-5xl text-white font-bold mb-6 tracking-tighter block">
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

					{withImage && (
						<PrismicNextImage
							field={slice.primary.image}
							className="hidden lg:block"
							fallbackAlt=""
						/>
					)}
				</div>
			</Container>
		</section>
	)
}

const bannerStyles = tv({
	slots: {
		section: 'py-8',
		wrapper: ''
	},
	variants: {
		withImage: {
			true: {
				wrapper: 'grid lg:grid-cols-2 gap-8 items-center justify-between'
			}
		},
		withBackground: {
			true: {
				section:
					'relative overflow-hidden before:block before:absolute before:inset-0 before:bg-black/70 before:z-10 bg-black',
				wrapper: 'z-10'
			},
			false: {
				section: 'bg-gradient-to-r from-primary-500 to-primary-700'
			}
		}
	}
})
