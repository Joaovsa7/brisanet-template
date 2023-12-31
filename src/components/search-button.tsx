'use client'
import {
	PopoverArrow,
	PopoverClose,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
	Root as PopoverRoot
} from '@radix-ui/react-popover'
import { SearchIcon, XIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchButton() {
	const [popoverIsOpen, setPopoverIsOpen] = useState(false)

	const router = useRouter()
	const searchParams = useSearchParams()

	const query = searchParams.get('q')

	function handleSearch(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData)

		const query = data.q

		if (!query) {
			return null
		}

		setPopoverIsOpen(false)
		router.push(`/busca?q=${query}`)
	}

	return (
		<PopoverRoot open={popoverIsOpen} onOpenChange={setPopoverIsOpen}>
			<PopoverTrigger asChild>
				<button
					type="button"
					className="group shadow-xl fixed bottom-6 right-6 w-16 h-16 text-white bg-primary-500 hover:bg-primary-400 transition-colors
         rounded-full flex items-center justify-center"
				>
					<SearchIcon className="w-8 h-8 group-data-[state=open]:hidden data-[state=closed]:block" />
					<XIcon className="w-8 h-8 group-data-[state=closed]:hidden data-[state=open]:block" />
				</button>
			</PopoverTrigger>

			<PopoverPortal>
				<PopoverContent
					align="end"
					sideOffset={10}
					className="rounded p-4 w-80 sm:w-96 bg-white shadow-xl focus:shadow-2xl will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
				>
					<span className="mb-2 block font-medium">O que você procura?</span>
					<form onSubmit={handleSearch} className="flex gap-1">
						<input
							type="text"
							name="q"
							defaultValue={query ?? ''}
							placeholder="Ex: Qual a melhor operadora de internet?"
							className="px-3 h-10 border border-neutral-200 rounded w-full focus:border-neutral-500 focus:outline-none text-sm sm:text-base"
						/>
						<button
							type="submit"
							className="flex items-center justify-center h-10 w-12 bg-primary-500 hover:bg-primary-400 transition-colors text-white rounded"
						>
							<SearchIcon className="w-5 h-5" />
						</button>
					</form>

					<PopoverClose
						className="rounded-full h-5 w-5 inline-flex items-center justify-center text-neutral-800 absolute top-4 right-4 hover:bg-neutral-200 focus:shadow-xl outline-none cursor-default"
						aria-label="Fechar"
					>
						<XIcon className="w-4 h-4" />
					</PopoverClose>

					<PopoverArrow className="fill-white" />
				</PopoverContent>
			</PopoverPortal>
		</PopoverRoot>
	)
}
