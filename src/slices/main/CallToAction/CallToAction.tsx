import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>

export default function CallToAction({ slice }: CallToActionProps) {
	if (!isFilled.contentRelationship(slice.primary.call_to_action)) {
		return null
	}

	return null
}
