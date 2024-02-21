'use client'
import {
	Dialog as DialogRoot,
	DialogClose,
	DialogContent,
	DialogPortal,
	DialogTrigger
} from '@radix-ui/react-dialog'
import { IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { Logo } from './logo'

export function MobileMenu({ children }: { children: React.ReactNode }) {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const pathname = usePathname()

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		setMenuIsOpen(false)
	}, [pathname])

	return (
		<div className="xl:hidden">
			<DialogRoot open={menuIsOpen} onOpenChange={setMenuIsOpen}>
				<DialogTrigger asChild>
					<Button size="xs" variant="secondary">
						Menu
					</Button>
				</DialogTrigger>

				<DialogPortal>
					<DialogContent className="xl:hidden bg-secondary fixed inset-0 z-50 overflow-y-auto">
						<div className="p-4 flex items-center justify-between">
							<Link prefetch={false} href="/" className="w-32">
								<Logo isWhite />
							</Link>

							<DialogClose aria-label="Fechar menu">
								<IconX className="text-white w-8 h-8" />
							</DialogClose>
						</div>

						{children}
					</DialogContent>
				</DialogPortal>
			</DialogRoot>
		</div>
	)
}
