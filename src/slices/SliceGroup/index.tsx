import { type Content, isFilled } from '@prismicio/client'
import { type SliceComponentProps, SliceZone } from '@prismicio/react'

import { components } from '..'

export type SliceGroupProps = SliceComponentProps<Content.SliceGroupSlice> & {
	slice: {
		primary: {
			slice_group: Content.SliceGroupDocument
		}
	}
}

const SliceGroup = ({ slice }: SliceGroupProps) => {
	if (!isFilled.contentRelationship(slice.primary.slice_group)) {
		return null
	}

	if (slice.primary.slice_group.data.slices.length === 0) {
		return null
	}

	return (
		<SliceZone
			slices={slice.primary.slice_group.data.slices}
			components={components}
		/>
	)
}

export default SliceGroup
