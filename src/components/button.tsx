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
		base: 'inline-flex items-center justify-center text-center gap-2 font-bold transition-colors uppercase',
		variants: {
			variant: {
				primary: 'bg-primary text-white hover:bg-primary'
			},
			outline: {
				true: ''
			},
			ghost: {
				true: 'bg-transparent text-primary hover:bg-primary/10'
			},
			size: {
				sm: 'h-10 px-4 text-sm rounded',
				md: 'h-12 px-5 rounded',
				lg: 'h-14 px-7 text-lg rounded-md'
			}
		},
		compoundVariants: [
			{
				variant: 'primary',
				outline: true,
				class:
					'bg-transparent border border-primary text-primary hover:text-white hover:bg-primary'
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
