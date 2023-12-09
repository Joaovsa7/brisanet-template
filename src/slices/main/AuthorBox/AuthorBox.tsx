import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

export type AuthorBoxProps = SliceComponentProps<Content.AuthorBoxSlice>

export default function AuthorBox({ slice }: AuthorBoxProps) {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for author_box (variation: {slice.variation}) Slices
		</section>
	)
}
