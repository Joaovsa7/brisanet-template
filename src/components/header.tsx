import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'

import { Button } from './button'
import { Container } from './container'
import { Logo } from './logo'
import { MenuButton } from './menu-button'

export function Header() {
	return (
		<header className="py-2 bg-white border-b border-neutral-200 sticky top-0 left-0 right-0">
			<Container size="lg" className="flex items-center justify-between py-3">
				<Logo />

				<nav className="hidden xl:flex items-center">
					<ul className="flex items-center justify-center gap-4 text-neutral-600">
						<li>
							<Link href="/" className="flex items-center gap-1">
								Operadoras de Internet
								<ChevronDownIcon className="w-4 h-4" />
							</Link>
						</li>
						<li>
							<Link href="/" className="flex items-center gap-1">
								Operadoras de Saúde
								<ChevronDownIcon className="w-4 h-4" />
							</Link>
						</li>
						<li>
							<Link href="/" className="flex items-center gap-1">
								Atendimento das Operadoras
								<ChevronDownIcon className="w-4 h-4" />
							</Link>
						</li>
						<li>
							<Link href="/" className="flex items-center gap-1">
								Streamings
								<ChevronDownIcon className="w-4 h-4" />
							</Link>
						</li>
						<li>
							<Link href="/" className="flex items-center gap-1">
								Blog
							</Link>
						</li>
					</ul>
				</nav>

				<Button asChild>
					<Link href="/">Avaliar Operadora</Link>
				</Button>

				<div className="hidden">
					<MenuButton />
				</div>
			</Container>
		</header>
	)
}
