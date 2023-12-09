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
		<footer className="bg-white py-8 text-neutral-700 border-t border-neutral-200">
			<Container size="lg" className="flex flex-col gap-8">
				{footerDocument?.data.slices && (
					<SliceZone
						slices={footerDocument.data.slices}
						components={footerSlices}
					/>
				)}

				{isFilled.group(footerDocument?.data.ans_number) && (
					<ul className="pb-8 border-b border-neutral-300 flex gap-2 flex-wrap">
						{footerDocument?.data.ans_number.map((item) => (
							<li key={item.name} className="flex flex-col gap-1">
								<span className="text-xs">{item.name}</span>
								<span className="text-xs p-1 bg-black text-white font-medium rounded-sm">
									{item.number}
								</span>
							</li>
						))}
					</ul>
				)}

				<div className="flex flex-col gap-4 items-center justify-between sm:flex-row">
					<p className="text-sm">
						&copy; {currentYear} - Portal das Operadoras
					</p>
					<Logo />
				</div>
			</Container>
		</footer>
	)
}
