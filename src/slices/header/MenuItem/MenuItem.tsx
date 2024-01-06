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
import { ChevronDownIcon } from 'lucide-react'

export type MenuItemProps = SliceComponentProps<Content.MenuItemSlice>

export default function MenuItem({ slice }: MenuItemProps) {
	const isDropdown = slice.items.length > 0

	return (
		<NavigationMenuItem className="text-sm text-neutral-600 font-semibold">
			{isDropdown ? (
				<>
					<NavigationMenuTrigger>
						<PrismicNextLink
							field={slice.primary.item_link}
							className="flex items-center justify-center gap-2 h-16 pl-4 pr-2 transition-colors hover:text-primary-500"
						>
							<span>{slice.primary.item_label}</span>
							<ChevronDownIcon className="w-4 h-4" />
						</PrismicNextLink>
					</NavigationMenuTrigger>

					<NavigationMenuContent
						forceMount
						className="bg-white min-w-60 overflow-hidden shadow-md rounded-md absolute top-20 data-[state=closed]:sr-only"
					>
						<ul className="flex flex-col gap-2">
							{slice.items.map((item) => (
								<li key={item.subitem_label}>
									<NavigationMenuLink asChild>
										<PrismicNextLink
											field={item.subitem_link}
											className="py-3 px-6 block hover:bg-primary-500 hover:text-white transition-colors"
										>
											{item.subitem_label}
										</PrismicNextLink>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</>
			) : (
				<NavigationMenuLink asChild>
					<PrismicNextLink
						field={slice.primary.item_link}
						className="flex items-center justify-center h-16 px-4 transition-colors hover:text-primary-500"
					>
						{slice.primary.item_label}
					</PrismicNextLink>
				</NavigationMenuLink>
			)}
		</NavigationMenuItem>
	)
}
