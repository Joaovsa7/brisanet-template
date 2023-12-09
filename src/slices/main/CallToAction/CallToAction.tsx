import { Content, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import { Button } from '~/components/button'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'

import { CallToActionDocumentData } from '../../../../prismicio-types'

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

export default function CallToAction({ slice }: CallToActionProps) {
	if (!isFilled.contentRelationship(slice.primary.call_to_action)) {
		return null
	}

	const { content, cta_label, cta_link } = slice.primary.call_to_action
		.data as CallToActionDocumentData

	const contentIsFilled = isFilled.richText(content)
	const ctaIsFilled = isFilled.link(cta_link) && isFilled.keyText(cta_label)

	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="bg-primary-600 py-12 rounded-md"
		>
			<div className="flex flex-col gap-6 items-center">
				{contentIsFilled && (
					<RichText field={content} className="text-center prose-invert" />
				)}
				{ctaIsFilled && (
					<Button asChild size="lg">
						<PrismicNextLink field={cta_link}>{cta_label}</PrismicNextLink>
					</Button>
				)}
			</div>
		</Section>
	)
}
