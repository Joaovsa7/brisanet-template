import { Content, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'

import { CallToActionDocument } from '../../../../prismicio-types'

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

export default function CallToAction({ slice }: CallToActionProps) {
	if (!isFilled.contentRelationship(slice.primary.call_to_action)) {
		return null
	}

	const cta = slice.primary.call_to_action as unknown as CallToActionDocument

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="py-16 lg:py-24"
		>
			<Container>
				<div className="p-10 bg-white flex items-center justify-between gap-6 flex-wrap border-b-8 border-b-secondary shadow rounded">
					<RichText field={cta.data.title} className="prose-headings:m-0" />

					<Button asChild size="lg">
						<PrismicNextLink field={cta.data.cta_link} prefetch={false}>
							{cta.data.cta_label}
						</PrismicNextLink>
					</Button>
				</div>
			</Container>
		</section>
	)
}
