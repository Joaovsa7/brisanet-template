'use client'
import {
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
	Root
} from '@radix-ui/react-dialog'
import { SearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchButton() {
	const [searchIsOpen, setSearchIsOpen] = useState(false)

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

		setSearchIsOpen(false)
		router.push(`/busca?q=${query}`)
	}

	return (
		<Root open={searchIsOpen} onOpenChange={setSearchIsOpen}>
			<DialogTrigger
				aria-label="Busca"
				className="flex items-center gap-2 bg-primary-600 text-white h-10 rounded w-10 justify-center outline-none"
			>
				<SearchIcon className="w-6 h-6" />
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay className="bg-black/70 data-[state=open]:animate-overlayShow fixed inset-0" />
				<DialogContent className="absolute top-14 xl:top-16 left-0 right-0">
					<form onSubmit={handleSearch}>
						<label className="w-full flex items-center gap-2 p-4 bg-neutral-100 justify-center xl:h-16">
							<SearchIcon className="w-5 h-5 text-neutral-500" />
							<input
								type="text"
								name="q"
								placeholder="Pesquise por operadoras de internet e saúde..."
								className="w-full max-w-96 flex focus:border-neutral-500 focus:outline-none bg-transparent placeholder:text-neutral-500"
							/>
						</label>
					</form>
					<DialogClose />
				</DialogContent>
			</DialogPortal>
		</Root>
	)
}
