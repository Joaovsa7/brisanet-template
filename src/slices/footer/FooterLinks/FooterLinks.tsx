import {
	Content,
	FilledContentRelationshipField,
	LinkResolverFunction,
	asText
} from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

const linkResolver: LinkResolverFunction = (
	doc: FilledContentRelationshipField
) => {
	return doc?.url?.replaceAll?.('--', '/') ?? '/'
}

export type FooterLinksProps = SliceComponentProps<Content.FooterLinksSlice>

export default function FooterLinks({ slice }: FooterLinksProps) {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-12"
		>
			{slice.items.map((item) => (
				<nav key={asText(item.column_title)} className="footer-nav">
					<span className="footer-nav--heading">
						<PrismicRichText field={item.column_title} />
					</span>
					<span className="text-white">
						<PrismicRichText field={item.links} linkResolver={linkResolver} />
					</span>
				</nav>
			))}
		</section>
	)
}
