import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

interface IContainerProps
	extends ComponentProps<'div'>,
		VariantProps<typeof containerStyles> {}

export function Container({ className, size, ...props }: IContainerProps) {
	return <div className={containerStyles({ className, size })} {...props} />
}

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
