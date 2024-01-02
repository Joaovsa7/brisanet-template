import { SliceZone } from '@prismicio/react'

import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import { HomeDocument } from '../../prismicio-types'

export function Home({ document }: { document: HomeDocument }) {
	return (
		<>
			<PageInfo updatedAt={document.last_publication_date} />
			<main>
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		</>
	)
}
