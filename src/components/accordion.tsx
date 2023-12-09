'use client'
import { Content, Item, Root, Trigger } from '@radix-ui/react-accordion'
import type {
	AccordionContentProps,
	AccordionItemProps,
	AccordionSingleProps,
	AccordionTriggerProps
} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'
import { ElementRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

function AccordionRoot(props: AccordionSingleProps) {
	return <Root collapsible {...props} />
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
	return (
		<Item
			{...props}
			className={twMerge('border-b border-neutral-300', className)}
		/>
	)
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
				'group w-full flex items-center justify-between gap-4 py-4 text-base md:text-xl font-medium',
				className
			)}
		>
			<p className="group-data-[state=open]:text-primary-500 group-hover-[state=open]:text-primary-500 transition-colors duration-300">
				{children}
			</p>
			<ChevronDownIcon className="text-neutral-400 h-5 w-5 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary-500 group-hover:text-primary-500 group-focus:text-primary-500 ease-out transition-all duration-300" />
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
			className={twMerge('pb-4 data-[state=closed]:sr-only', className)}
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
