import Link from 'next/link'

interface ILogoProps {
	isWhite?: boolean
}

export function Logo({ isWhite }: ILogoProps) {
	return (
		<Link
			href="/"
			className="flex flex-col select-none tracking-tight text-center font-bold uppercase"
		>
			<span
				className={`text-md md:text-xl ${
					isWhite ? 'text-white' : 'text-primary-950'
				}`}
			>
				Portal das
			</span>{' '}
			<span
				className={`text-sm md:text-lg -mt-1.5 md:-mt-2.5 ${
					isWhite ? 'text-white' : 'text-primary-600'
				}`}
			>
				Operadoras
			</span>
		</Link>
	)
}
