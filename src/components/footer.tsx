import { SliceZone } from '@prismicio/react'

import { footerSlices } from '~/slices'
import { Container } from './container'
import { Logo } from './logo'

import { isFilled } from '@prismicio/client'
import Link from 'next/link'
import { FooterDocument } from '../../prismicio-types'

interface IFooterProps {
	footerDocument: FooterDocument | null
}

export function Footer({ footerDocument }: IFooterProps) {
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

					<Link href="/">
						<Logo isWhite className="w-32" />
					</Link>
				</div>
			</Container>
		</footer>
	)
}
