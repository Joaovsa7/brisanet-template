import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ISectionProps = ComponentProps<'section'>

export function Section({ className, ...props }: ISectionProps) {
	return (
		<section
			className={twMerge('my-4 sm:my-6 md:my-10', className)}
			{...props}
		/>
	)
}
