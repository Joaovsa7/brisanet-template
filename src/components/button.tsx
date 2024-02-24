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
		{ asChild, className, ghost, outlined, size, variant, ...props },
		forwardedRef
	) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				{...props}
				ref={forwardedRef}
				className={buttonStyles({ className, ghost, outlined, size, variant })}
			/>
		)
	}
)

Button.displayName = 'Button'

const buttonStyles = tv(
	{
		base: 'inline-flex items-center justify-center text-center gap-2 font-semibold transition-colors duration-500 uppercase whitespace-nowrap',
		variants: {
			variant: {
				primary: 'bg-primary text-white hover:bg-secondary',
				secondary: 'bg-secondary text-white hover:bg-primary'
			},
			outlined: {
				true: ''
			},
			ghost: {
				true: 'bg-transparent text-primary hover:bg-primary/10'
			},
			size: {
				xs: 'h-9 px-3',
				sm: 'h-10 px-4',
				md: 'h-12 px-5',
				lg: 'h-14 px-7 text-lg'
			}
		},
		compoundVariants: [
			{
				variant: 'primary',
				outlined: true,
				class:
					'bg-transparent border border-primary text-primary hover:text-white hover:bg-primary'
			},
			{
				variant: 'secondary',
				outlined: true,
				class:
					'bg-transparent border border-secondary text-secondary hover:text-white hover:bg-secondary'
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
