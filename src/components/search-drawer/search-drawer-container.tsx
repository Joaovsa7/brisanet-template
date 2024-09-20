import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

import { prismicio } from '~/libs/prismicio'

import { SearchDrawer } from './search-drawer'

export async function SearchDrawerContainer() {
	const ua = headers().get('user-agent')

	const device = new UAParser(ua || '').getDevice()

	const isMobile = device.type === 'mobile'

	if (!isMobile) {
		return null
	}

	try {
		const document = await prismicio.getSingle('search_field')

		return <SearchDrawer document={document} />
	} catch {
		return null
	}
}
