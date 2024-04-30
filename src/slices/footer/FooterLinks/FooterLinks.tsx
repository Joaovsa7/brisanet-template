import {
	type Content,
	type FilledContentRelationshipField,
	type LinkResolverFunction,
	asHTML,
	asText
} from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

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
					<span
						className="footer-nav--heading"
						dangerouslySetInnerHTML={{ __html: asHTML(item.column_title) }}
					/>
					<span
						className="text-white"
						dangerouslySetInnerHTML={{
							__html: asHTML(item.links, {
								linkResolver
							})
						}}
					/>
				</nav>
			))}
		</section>
	)
}
