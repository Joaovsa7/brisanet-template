import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Slices`.
 */
export type SlicesProps = SliceComponentProps<Content.SlicesSlice>

/**
 * Component for "Slices" Slices.
 */
const Slices = ({ slice }: SlicesProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			Placeholder component for slices (variation: {slice.variation}) Slices
		</section>
	)
}

export default Slices
