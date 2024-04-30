'use client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceZone } from '@prismicio/react'
import {
	NavigationMenuList,
	Root as NavigationMenuRoot
} from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

import type { Content } from '@prismicio/client'
import { headerSlices } from '~/slices'
import { Button } from '../button'
import { Container } from '../container'
import { Logo } from '../logo'
import { MobileMenu } from '../mobile-menu'

export function HeaderContent({
	headerDocument
}: { headerDocument: Content.HeaderDocument }) {
	const menuItems = headerDocument?.data.slices.filter(
		(slice) => slice.slice_type === 'menu_item'
	)

	return (
		<Container size="lg" className="flex items-center justify-between h-16">
			<Link href="/" prefetch={false} className="w-32">
				<Logo />
			</Link>

			<NavigationMenuRoot className="hidden xl:block relative">
				<NavigationMenuList className="flex items-center justify-center">
					<SliceZone slices={menuItems} components={headerSlices} />
				</NavigationMenuList>
			</NavigationMenuRoot>

			<div className="flex">
				<div className="flex items-center flex-row gap-2 sm:gap-4">
					<Button asChild size="xs">
						<PrismicNextLink
							field={headerDocument?.data.btn_primary_link}
							prefetch={false}
						>
							{headerDocument?.data.btn_primary_text}
						</PrismicNextLink>
					</Button>

					<MobileMenu>
						<NavigationMenuRoot orientation="vertical">
							<NavigationMenuList>
								<SliceZone slices={menuItems} components={headerSlices} />
							</NavigationMenuList>
						</NavigationMenuRoot>
					</MobileMenu>

					<Button
						asChild
						size="xs"
						variant="secondary"
						className="hidden xl:flex"
					>
						<PrismicNextLink
							field={headerDocument?.data.btn_secondary_link}
							prefetch={false}
						>
							{headerDocument?.data.btn_secondary_text}
						</PrismicNextLink>
					</Button>
				</div>
			</div>
		</Container>
	)
}
