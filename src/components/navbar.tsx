import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'

export function Navbar() {
	return (
		<NavigationMenu.Root className="">
			<NavigationMenu.List className="">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="">
						Learn{' '}
						<ChevronDownIcon
							className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="">
						<ul className="">
							<li className="">
								<NavigationMenu.Link asChild>
									<a href="/">Hello</a>
								</NavigationMenu.Link>
							</li>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="">
					<div className="" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="">
				<NavigationMenu.Viewport className="" />
			</div>
		</NavigationMenu.Root>
	)
}
