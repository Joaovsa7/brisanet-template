import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps, SliceZone } from '@prismicio/react'

import { Container } from '~/components/container'
import { Section } from '~/components/section'
import { tableSlices } from '~/slices'

export type ITableProps = SliceComponentProps<Content.TableSlice>

export default function Table({ slice }: ITableProps) {
	if (!isFilled.contentRelationship(slice.primary.table)) {
		return null
	}

	const { slices } = slice.primary.table.data as Pick<
		Content.TableDocumentData,
		'slices'
	>

	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg" className="flex items-center">
				<div className="overflow-x-auto mx-auto">
					<table>
						<SliceZone slices={slices} components={tableSlices} />
					</table>
				</div>
			</Container>
		</Section>
	)
}
