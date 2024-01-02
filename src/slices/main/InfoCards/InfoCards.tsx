import { Content, asText } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'
import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'

type InfoCardsProps = SliceComponentProps<Content.InfoCardsSlice>

export default function InfoCards({ slice }: InfoCardsProps) {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-neutral-200/50 py-16 lg:py-24"
		>
			<Container size="lg" className="grid gap-6 lg:grid-cols-3">
				{slice.items.map((item) => (
					<article
						key={asText(item.title)}
						className="flex flex-col md:flex-row lg:flex-col rounded overflow-hidden"
					>
						<PrismicNextImage
							field={item.image}
							width={700}
							height={393.75}
							fallbackAlt=""
							className="aspect-video md:w-56 md:h-56 object-cover lg:w-fit lg:h-fit"
						/>

						<main className="p-6 bg-white flex flex-col justify-center lg:h-full lg:justify-start border border-neutral-200">
							<RichText field={item.title} className="prose-headings:m-0" />
							<RichText field={item.description} />
						</main>
					</article>
				))}
			</Container>
		</section>
	)
}
