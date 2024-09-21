import { type Content, asHTML, asText, isFilled } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'

export type TableProps = SliceComponentProps<Content.TableSlice>

const Table = ({ slice }: TableProps) => {
	const firstColumnItems = slice.primary.first_column.filter((item) =>
		isFilled.richText(item.text)
	)
	const secondColumnItems = slice.primary.second_column.filter((item) =>
		isFilled.richText(item.text)
	)

	if (!firstColumnItems.length || !secondColumnItems.length) {
		return null
	}

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<table className="w-full text-sm font-semibold md:text-xl">
					<thead>
						<tr className="bg-primary h-16 text-white">
							<td
								className="w-1/2 px-4"
								dangerouslySetInnerHTML={{
									__html: asHTML(firstColumnItems[0].text)
								}}
							/>
							<td
								className="w-1/2 px-4"
								dangerouslySetInnerHTML={{
									__html: asHTML(secondColumnItems[0].text)
								}}
							/>
						</tr>
					</thead>

					<tbody>
						{firstColumnItems.slice(1).map((item, idx) => (
							<tr key={asText(item.text)} className="h-14">
								<td
									className="px-4 border-b border-b-neutral-300"
									dangerouslySetInnerHTML={{ __html: asHTML(item.text) }}
								/>
								<td
									className="px-4 border-b border-b-neutral-300 text-primary"
									dangerouslySetInnerHTML={{
										__html: asHTML(secondColumnItems[idx + 1].text)
									}}
								/>
							</tr>
						))}
					</tbody>
				</table>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'DataTable',
							about: slice.primary.about,
							hasPart: {
								'@type': 'Table',
								name: slice.primary.name,
								columns: [
									{
										'@type': 'TableColumn',
										name: asText(firstColumnItems[0].text),
										columnNumber: 1
									},
									{
										'@type': 'TableColumn',
										name: asText(secondColumnItems[0].text),
										columnNumber: 2
									}
								],
								rows: firstColumnItems.slice(1).map((item, idx) => ({
									'@type': 'TableRow',
									cells: [
										{
											'@type': 'TableCell',
											value: asText(item.text)
										},
										{
											'@type': 'TableCell',
											value: asText(secondColumnItems[idx + 1].text)
										}
									]
								}))
							}
						})
					}}
				/>
			</Container>
		</section>
	)
}

export default Table
