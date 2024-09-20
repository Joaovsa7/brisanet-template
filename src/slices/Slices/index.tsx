import { type Content, isFilled } from '@prismicio/client'
import { type SliceComponentProps, SliceZone } from '@prismicio/react'

import { components } from '..'

export type SlicesProps = SliceComponentProps<Content.SlicesSlice> & {
	slice: Content.SlicesSlice & {
		primary: Content.SlicesSliceDefaultPrimary & {
			slices: Content.SlicesDocument & {
				data: Content.SlicesDocumentData
			}
		}
	}
}

export default function Slices({ slice }: SlicesProps) {
	if (!isFilled.contentRelationship(slice.primary.slices)) {
		return null
	}

	if (slice.primary.slices.data.slices.length === 0) {
		return null
	}

	return (
		<SliceZone
			slices={slice.primary.slices.data.slices}
			components={components}
		/>
	)
}
