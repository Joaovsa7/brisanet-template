'use client'
import {
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
	Root
} from '@radix-ui/react-dialog'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

export function MenuButton() {
	return (
		<Root>
			<DialogTrigger
				aria-label="Menu"
				className="flex items-center gap-2 bg-primary-600 text-white h-10 rounded w-10 justify-center xl:hidden"
			>
				<MenuIcon className="w-6 h-6" />
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay className="bg-black/70 data-[state=open]:animate-overlayShow fixed inset-0" />
				<DialogContent className="fixed left-0 top-0 bottom-0 bg-white p-4 overflow-y-auto min-w-[280px] scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-200">
					<nav>
						<ul className="flex flex-col">
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 1</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 2</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 3</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
							<li>
								<Link
									href="/"
									className="group px-4 py-3 flex items-center justify-between font-medium rounded-md hover:bg-neutral-100 text-neutral-800 text-sm"
								>
									<span>Menu item 4</span>
									<ChevronRightIcon className="w-5 h-5 text-neutral-400 group-hover:text-neutral-800" />
								</Link>{' '}
							</li>
						</ul>
					</nav>
					<DialogClose />
				</DialogContent>
			</DialogPortal>
		</Root>
	)
}
