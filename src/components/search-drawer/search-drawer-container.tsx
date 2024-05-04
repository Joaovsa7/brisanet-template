import { createClient } from '~/libs/prismicio'

import { SearchDrawer } from './search-drawer'

export async function SearchDrawerContainer() {
	try {
		const client = createClient()

		const document = await client.getSingle('search_field')

		return (
			<div className="sm:hidden">
				<SearchDrawer document={document} />
			</div>
		)
	} catch {
		return null
	}
}
