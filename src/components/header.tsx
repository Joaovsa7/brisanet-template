'use client'
import { SliceZone } from '@prismicio/react'
import {
	NavigationMenuList,
	Root as NavigationMenuRoot
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

import { headerSlices } from '~/slices'
import { Button } from './button'
import { Container } from './container'
import { Logo } from './logo'
import { MenuButton } from './menu-button'

import { HeaderDocument } from '../../prismicio-types'

export function Header({
	headerDocument
}: { headerDocument: HeaderDocument | null }) {
	return (
		<header className="bg-white border-b border-neutral-200 sticky top-0 left-0 right-0 z-50 py-2 xl:py-0">
			<Container size="lg" className="flex items-center justify-between">
				<Logo />

				<NavigationMenuRoot className="hidden relative xl:block">
					<NavigationMenuList className="flex items-center justify-center">
						<SliceZone
							slices={headerDocument?.data?.slices}
							components={headerSlices}
						/>
					</NavigationMenuList>
				</NavigationMenuRoot>

				<div className="flex gap-1">
					<Button asChild size="sm">
						<Link href="/">Avaliar Operadora</Link>
					</Button>

					<MenuButton />
				</div>
			</Container>
		</header>
	)
}
