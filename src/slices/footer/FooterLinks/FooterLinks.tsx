import { Content, asText } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type FooterLinksProps = SliceComponentProps<Content.FooterLinksSlice>

export default function FooterLinks({ slice }: FooterLinksProps) {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8 border-b border-neutral-300"
		>
			{slice.items.map((item) => (
				<nav key={asText(item.column_title)} className="footer-nav">
					<span className="font-bold font-heading mb-3 block text-white uppercase text-sm">
						<PrismicRichText field={item.column_title} />
					</span>
					<span className="text-white/80">
						<PrismicRichText field={item.links} />
					</span>
				</nav>
			))}
		</section>
	)
}
