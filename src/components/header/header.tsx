import { prismicio } from '~/libs/prismicio'

import { HeaderContent } from './content'

export async function Header() {
	const headerDocument = await prismicio.getSingle('header')

	return (
		<header className="bg-white border-b border-neutral-200 sticky top-0 left-0 right-0 z-40">
			<HeaderContent headerDocument={headerDocument} />
		</header>
	)
}
