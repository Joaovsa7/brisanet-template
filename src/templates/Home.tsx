import { SliceZone } from '@prismicio/react'

import { GoogleStructuredData } from '~/components/google-structured-data'
import { PageInfo } from '~/components/page-info'
import { mainSlices } from '~/slices'

import type { HomeDocument } from '../../prismicio-types'

export function Home({ document }: { document: HomeDocument }) {
	return (
		<>
			<PageInfo updatedAt={document.last_publication_date} />
			<GoogleStructuredData data={document.data.google_structured_data} />
			<main>
				<SliceZone slices={document.data.slices} components={mainSlices} />
			</main>
		</>
	)
}
