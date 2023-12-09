import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

interface IButtonProps
	extends ComponentProps<'button'>,
		VariantProps<typeof buttonStyles> {
	asChild?: boolean
}

export const Button = forwardRef<ElementRef<'button'>, IButtonProps>(
	(
		{ asChild, className, ghost, outline, size, variant, ...props },
		forwardedRef
	) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				{...props}
				ref={forwardedRef}
				className={buttonStyles({ className, ghost, outline, size, variant })}
			/>
		)
	}
)

Button.displayName = 'Button'

const buttonStyles = tv(
	{
		base: 'inline-flex items-center justify-center gap-2 font-semibold transition-colors',
		variants: {
			variant: {
				primary: 'bg-primary-700 text-white hover:bg-primary-500'
			},
			outline: {
				true: ''
			},
			ghost: {
				true: 'bg-transparent text-primary-700 hover:bg-primary-50'
			},
			size: {
				sm: 'h-10 px-4 text-sm rounded',
				md: 'h-12 px-5 rounded-md',
				lg: 'h-14 px-7 rounded-md'
			}
		},
		compoundVariants: [
			{
				variant: 'primary',
				outline: true,
				class:
					'bg-transparent border border-primary-700 text-primary-700 hover:text-white hover:bg-primary-700'
			}
		],
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	},
	{
		responsiveVariants: ['sm', 'md', 'lg', 'xl']
	}
)
