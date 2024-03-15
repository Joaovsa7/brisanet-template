import { SliceZone } from '@prismicio/react'
import Link from 'next/link'

import { footerSlices } from '~/slices'
import { Container } from './container'
import { Logo } from './logo'

import { createClient } from '~/libs/prismicio'

export async function Footer() {
	const client = createClient()

	const footerDocument = await client.getSingle('footer').catch(() => null)

	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-secondary pt-14 pb-8">
			<Container size="lg">
				{footerDocument?.data.slices && (
					<SliceZone
						slices={footerDocument.data.slices}
						components={footerSlices}
					/>
				)}

				<div className="flex flex-col gap-4 items-center justify-between sm:flex-row">
					<p className="text-sm text-white font-medium">
						&copy; {currentYear} Telefone da Brisanet - Todos os direitos
						reservados
					</p>

					<Link href="/" prefetch={false}>
						<Logo isWhite className="w-32" />
					</Link>
				</div>
			</Container>
		</footer>
	)
}
