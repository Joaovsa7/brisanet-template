import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ISectionProps = ComponentProps<'section'>

export function Section({ className, ...props }: ISectionProps) {
	return (
		<section
			className={twMerge('mb-4 sm:mb-6 md:mb-10', className)}
			{...props}
		/>
	)
}
