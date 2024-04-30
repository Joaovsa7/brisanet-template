import { Slot } from '@radix-ui/react-slot'
import { type ComponentProps, type ElementRef, forwardRef } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

interface IContainerProps
	extends ComponentProps<'div'>,
		VariantProps<typeof containerStyles> {
	asChild?: boolean
}

export const Container = forwardRef<ElementRef<'div'>, IContainerProps>(
	({ className, asChild, size, ...props }, forwardedRef) => {
		const Component = asChild ? Slot : 'div'

		return (
			<Component
				{...props}
				ref={forwardedRef}
				className={containerStyles({ className, size })}
			/>
		)
	}
)

const containerStyles = tv({
	base: 'mx-auto px-6',
	variants: {
		size: {
			sm: 'max-w-3xl',
			md: 'max-w-5xl',
			lg: 'max-w-7xl'
		}
	},
	defaultVariants: {
		size: 'md'
	}
})
