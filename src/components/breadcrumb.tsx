import { isFilled } from '@prismicio/client'
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Container } from './container'

interface IBreadcrumb {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
items: any[]
}

export function Breadcrumb({ items = [] }: IBreadcrumb) {
	const breacrumbIsFilled = items.length > 0

	if (!breacrumbIsFilled) {
		return null
	}

	return (
		<section className="py-5">
			<Container size="lg">
				<ul className="flex items-center gap-2 text-neutral-500 text-base">
					<BreadcrumbItem>
						<meta itemProp="position" content="1" />

						<BreadcrumbLink href="/">
							<HomeIcon className="w-4 h-4" />
							<span itemProp="name">Página inicial</span>
						</BreadcrumbLink>
					</BreadcrumbItem>

					{items.map((item, index) => {
						const linkIsFilled = isFilled.link(item.link)

						return (
							<BreadcrumbItem key={item.label}>
								<meta itemProp="position" content={String(index + 2)} />

								{linkIsFilled ? (
									<BreadcrumbLink field={item.link}>
										<span itemProp="name">{item.label}</span>
									</BreadcrumbLink>
								) : (
									<span itemProp="name">{item.label}</span>
								)}
							</BreadcrumbItem>
						)
					})}
				</ul>
			</Container>
		</section>
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
				'group flex items-center gap-2 last:font-medium last:underline last:underline-offset-4 whitespace-nowrap sr-only md:not-sr-only [&:nth-last-child(2)]:not-sr-only',
				className
			)}
		>
			<ChevronLeftIcon className="w-4 h-4 hidden group-first:!hidden group-[&:nth-last-child(2)]:block md:group-[&:nth-last-child(2)]:hidden" />
			{children}
			<ChevronRightIcon className="w-4 h-4 group-[&:nth-last-child(2)]:hidden md:group-[&:nth-last-child(2)]:block group-last:hidden" />
		</li>
	)
}

function BreadcrumbLink({ className, ...props }: PrismicNextLinkProps) {
	return (
		<PrismicNextLink
			target="_self"
			itemID="/"
			itemScope
			itemType="http://schema.org/Thing"
			itemProp="item"
			data-wpel-link="internal"
			{...props}
			className={twMerge(
				'flex items-center gap-2 hover:underline underline-offset-4',
				className
			)}
		/>
	)
}
