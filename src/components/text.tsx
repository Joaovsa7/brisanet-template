import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITextProps extends ComponentProps<'span'> {
	asChild?: boolean
}

export const Text = forwardRef<ElementRef<'span'>, ITextProps>(
	({ asChild, className, ...props }, forwardedRef) => {
		const Component = asChild ? Slot : 'span'

		return (
			<Component
				{...props}
				ref={forwardedRef}
				className={twMerge('text block', className)}
			/>
		)
	}
)

Text.displayName = 'Text'
