'use client'
import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger
} from '@radix-ui/react-navigation-menu'
import { IconChevronDown } from '@tabler/icons-react'

export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>

export default function MenuItem({ slice }: MenuItemProps) {
	const isDefaultVariation = slice.variation === 'default'
	const isSubmenuVariation = slice.variation === 'submenu'

	return (
		<NavigationMenuItem className="text-secondary font-semibold uppercase">
			{isSubmenuVariation && (
				<>
					<NavigationMenuTrigger className="group flex items-center justify-center gap-2 h-16 pl-4 pr-2 transition-colors hover:text-primary uppercase">
						<span>{slice.primary.label}</span>
						<IconChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 duration-200 transition-transform" />
					</NavigationMenuTrigger>

					<NavigationMenuContent className="bg-white min-w-60 overflow-hidden shadow-md absolute top-20">
						<ul className="flex flex-col gap-2">
							{slice.items.map((item) => (
								<li key={item.label}>
									<NavigationMenuLink asChild>
										<PrismicNextLink
											field={item.link}
											className="py-3 px-6 block hover:text-primary transition-colors"
										>
											{item.label}
										</PrismicNextLink>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</>
			)}

			{isDefaultVariation && (
				<>
					<NavigationMenuLink asChild>
						<PrismicNextLink
							field={slice.primary.item_link}
							className="flex items-center justify-center h-16 px-4 transition-colors hover:text-primary"
						>
							{slice.primary.item_label}
						</PrismicNextLink>
					</NavigationMenuLink>
				</>
			)}
		</NavigationMenuItem>
	)
}
