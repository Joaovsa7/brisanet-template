'use client'
import { Content, Item, Root, Trigger } from '@radix-ui/react-accordion'
import type {
	AccordionContentProps,
	AccordionItemProps,
	AccordionSingleProps,
	AccordionTriggerProps
} from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons-react'
import { type ElementRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

function AccordionRoot(props: AccordionSingleProps) {
	return <Root collapsible {...props} />
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
	return <Item {...props} className={twMerge('bg-white shadow', className)} />
}

function AccordionTrigger({
	children,
	className,
	...props
}: AccordionTriggerProps) {
	return (
		<Trigger
			{...props}
			className={twMerge(
				'group w-full flex items-center justify-between gap-4 p-4 text-base md:text-lg font-medium',
				className
			)}
		>
			<h3 className="text-left text-secondary">{children}</h3>
			<IconChevronDown className="text-secondary max-w-6 max-h-6 min-h-6 min-w-6 group-data-[state=open]:rotate-180 transition-transform duration-300" />
		</Trigger>
	)
}

const AccordionContent = forwardRef<
	ElementRef<typeof Content>,
	AccordionContentProps
>(({ className, children, ...props }, forwardedRef) => {
	return (
		<Content
			{...props}
			forceMount
			ref={forwardedRef}
			className={twMerge('p-4 data-[state=closed]:sr-only', className)}
		>
			{children}
		</Content>
	)
})

AccordionContent.displayName = 'AccordionContent'

export const Accordion = {
	Root: AccordionRoot,
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent
}
