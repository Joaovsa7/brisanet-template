import { isMobile, isTablet } from 'react-device-detect'
import { createClient } from '~/libs/prismicio'

import { SearchDrawer } from './search-drawer'

export async function SearchDrawerContainer() {
	if (!isMobile || !isTablet) {
		return null
	}

	try {
		const client = createClient()

		const document = await client.getSingle('search_field')

		return <SearchDrawer document={document} />
	} catch {
		return null
	}
}
