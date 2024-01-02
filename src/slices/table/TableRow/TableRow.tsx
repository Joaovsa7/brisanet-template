import { Content, asText } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

export type TableRowProps = SliceComponentProps<Content.TableRowSlice>

export default function TableRow({ slice }: TableRowProps) {
	const isBodyVariation = slice.variation === 'body'

	return isBodyVariation ? (
		<tbody
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="even:bg-primary-100"
		>
			<tr className="text-left whitespace-nowrap">
				{slice.items.map((item) => (
					<td key={asText(item.value)} className="p-4">
						<span>
							<PrismicRichText field={item.value} />
						</span>
					</td>
				))}
			</tr>
		</tbody>
	) : (
		<thead
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<tr className="bg-primary-500 text-white text-left font-bold whitespace-nowrap">
				{slice.items.map((item) => (
					<th key={asText(item.value)} className="p-4">
						<span>
							<PrismicRichText field={item.value} />
						</span>
					</th>
				))}
			</tr>
		</thead>
	)
}
