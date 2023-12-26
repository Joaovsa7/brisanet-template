import { SliceZone } from '@prismicio/react'

import { footerSlices } from '~/slices'
import { Container } from './container'
import { Logo } from './logo'

import { isFilled } from '@prismicio/client'
import { FooterDocument } from '../../prismicio-types'

interface IFooterProps {
	footerDocument: FooterDocument | null
}

export function Footer({ footerDocument }: IFooterProps) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-gradient-to-r from-primary-500 to-primary-700">
			<Container size="lg">
				{footerDocument?.data.slices && (
					<SliceZone
						slices={footerDocument.data.slices}
						components={footerSlices}
					/>
				)}

				{isFilled.group(footerDocument?.data.ans_number) && (
					<ul className="py-8 border-b border-white/30 flex gap-2 flex-wrap text-white font-medium">
						{footerDocument?.data.ans_number.map((item) => (
							<li key={item.name} className="flex flex-col gap-1">
								<span className="text-xs">{item.name}</span>
								<span className="text-xs p-1 bg-black text-white rounded-sm border border-white">
									{item.number}
								</span>
							</li>
						))}
					</ul>
				)}

				<div className="flex flex-col gap-4 items-center justify-between sm:flex-row py-4">
					<p className="text-sm text-white font-medium">
						&copy; {currentYear} - Portal das Operadoras
					</p>
					<Logo isWhite/>
				</div>
			</Container>
		</footer>
	)
}
