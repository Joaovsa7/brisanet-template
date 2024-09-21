'use client'

import type { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { DialogTitle } from '@radix-ui/react-dialog'
import { IconChevronRight, IconMenu2, IconSend2 } from '@tabler/icons-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { Drawer } from 'vaul'

import { CMS_ICONS } from '~/config/constants'

export function SearchDrawer({
	document
}: { document: Content.SearchFieldDocument }) {
	const [open, setOpen] = useState(true)
	const [searchValue, setSearchValue] = useState('')
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const router = useRouter()

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!searchValue.trim()) {
			return
		}

		setOpen(false)
		setSearchValue('')
		router.push(`/busca?q=${searchValue}`)
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchValue(event.target.value)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: reason
	useEffect(() => {
		setOpen(false)
	}, [pathname, searchParams])

	return (
		<Drawer.Root open={open} shouldScaleBackground onOpenChange={setOpen}>
			<Drawer.Trigger
				aria-label="Abrir campo de pesquisa"
				className="size-12 fixed right-4 bottom-4 flex items-center justify-center rounded-full shadow-lg bg-primary"
			>
				<IconMenu2 className="text-white" />
			</Drawer.Trigger>

			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/50 z-50 backdrop-blur-[2px]" />
				<Drawer.Content className="flex flex-col gap-4 fixed bottom-0 inset-x-0 rounded-t-3xl p-3 backdrop-blur-xl outline-none bg-white z-50">
					<DialogTitle className="sr-only">Campo de pesquisa</DialogTitle>
					<form onSubmit={handleSubmit}>
						<div className="flex items-center gap-2 pl-4 pr-2 rounded-3xl border border-neutral-200">
							<input
								type="text"
								placeholder={document.data.input_placeholder ?? 'Pesquisar...'}
								value={searchValue}
								onChange={handleChange}
								className="w-full flex-1 bg-transparent py-2.5 text-lg font-medium text-neutral-800 placeholder:text-neutral-800/60 outline-none"
							/>
							<button
								type="submit"
								className="rounded-full size-8 text-white bg-primary flex items-center justify-center"
							>
								<IconSend2 className="size-6" />
							</button>
						</div>
					</form>

					<ul className="font-medium flex flex-col gap-2">
						{document.data.most_visited_pages.map((page) => {
							const Icon = CMS_ICONS[page.icon ?? 'Ajuda']

							return (
								<PrismicNextLink
									key={page.page_name}
									field={page.page_url}
									className="flex items-center gap-2 focus:bg-neutral-200/40 focus:backdrop-blur-md p-2 rounded-lg"
								>
									<Icon className="size-6 text-primary" />
									<span className="flex-1">{page.page_name}</span>
									<IconChevronRight className="text-neutral-400" />
								</PrismicNextLink>
							)
						})}
					</ul>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	)
}
