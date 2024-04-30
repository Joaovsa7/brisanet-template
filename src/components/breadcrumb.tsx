'use client'
import {
	IconChevronLeft,
	IconChevronRight,
	IconHome2
} from '@tabler/icons-react'
import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type IBreadcrumbProps = ComponentProps<'ul'>

export function Breadcrumb({ className, ...props }: IBreadcrumbProps) {
	const pathname = usePathname()
	const [, ...pathnames] = pathname.split('/')

	const items = pathnames.map((item) => ({
		label: item.replaceAll('-', ' '),
		link: `${pathname.split(item)[0]}${item}`
	}))

	return (
		<ul
			itemScope
			itemType="http://schema.org/BreadcrumbList"
			{...props}
			className={twMerge(
				'flex items-center gap-2 text-neutral-500 text-base truncate max-w-[80ch]',
				className
			)}
		>
			<BreadcrumbItem>
				<meta itemProp="position" content="1" />

				<BreadcrumbLink href="/">
					<IconHome2 className="w-4 h-4" />
					<span itemProp="name">Página inicial</span>
				</BreadcrumbLink>
			</BreadcrumbItem>

			{items.map((item, index) => {
				return (
					<BreadcrumbItem key={item.label}>
						<meta itemProp="position" content={String(index + 2)} />

						<BreadcrumbLink href={item.link}>
							<span itemProp="name" className="truncate block max-w-[30ch]">
								{item.label}
							</span>
						</BreadcrumbLink>
					</BreadcrumbItem>
				)
			})}
		</ul>
	)
}

type IBreadcrumbItemProps = ComponentProps<'li'>

function BreadcrumbItem({
	className,
	children,
	...props
}: IBreadcrumbItemProps) {
	return (
		<li
			itemScope
			itemProp="itemListElement"
			itemType="http://schema.org/ListItem"
			{...props}
			className={twMerge(
				'group flex items-center gap-2 last:font-medium last:underline last:underline-offset-4 whitespace-nowrap sr-only md:not-sr-only [&:nth-last-child(2)]:not-sr-only truncate',
				className
			)}
		>
			<IconChevronLeft className="w-4 h-4 hidden group-first:!hidden group-[&:nth-last-child(2)]:block md:group-[&:nth-last-child(2)]:hidden" />
			{children}
			<IconChevronRight className="w-4 h-4 group-[&:nth-last-child(2)]:hidden md:group-[&:nth-last-child(2)]:block group-last:hidden" />
		</li>
	)
}

interface IBreadcrumbLinkProps extends LinkProps {
	children: React.ReactNode
}

function BreadcrumbLink({ children, ...props }: IBreadcrumbLinkProps) {
	return (
		<Link
			itemProp="item"
			{...props}
			className={twMerge(
				'flex items-center gap-2 hover:underline underline-offset-4 capitalize whitespace-nowrap'
			)}
		>
			{children}
		</Link>
	)
}
