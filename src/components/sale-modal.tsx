'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { IconArrowUpRight, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from './button'

export default function SaleModal() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	// biome-ignore lint/correctness/useExhaustiveDependencies: reason
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsOpen(true)
		}, 2000)

		return () => clearTimeout(timeoutId)
	}, [pathname])

	function handleCloseModal() {
		setIsOpen(false)
	}

	return (
		<Dialog.Root open={isOpen} onOpenChange={handleCloseModal}>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-black/80 fixed inset-0 z-50" />
				<Dialog.Content className="max-w-2xl w-full rounded-md overflow-hidden fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
					<Dialog.Close
						className="absolute top-4 right-4 bg-white rounded-full size-12 flex items-center justify-center"
						aria-label="Fechar modal"
					>
						<IconX className="size-6" />
					</Dialog.Close>
					<Image
						src="/sale-banner.png"
						alt="500 Mega por R$89,99 mês"
						width={672}
						height={378}
						className="aspect-video object-cover"
					/>
					<div className="bg-white p-8 text-center flex flex-col gap-6 items-center">
						<Dialog.Title className="text-3xl font-bold text-primary">
							Assine 300 e leve 500 Mega por R$89,99 mês
						</Dialog.Title>
						<Dialog.Description className="text-xl text-neutral-500 font-medium">
							Venha para a líder em satisfação do Brasil.
						</Dialog.Description>
						<Button asChild variant="secondary">
							<a
								href="https://brisanet.myog.io/assine/?resellerId=10563"
								target="_blank"
								rel="noreferrer"
							>
								Quero assinar agora
								<IconArrowUpRight />
							</a>
						</Button>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
