import Link from 'next/link'

export function Logo() {
	return (
		<Link href="/" className="flex flex-col select-none">
			<span className="text-[22.7px] text-neutral-900 tracking-tight font-bold uppercase">
				Portal das
			</span>{' '}
			<span className="uppercase text-neutral-500 -mt-2.5 text-xl font-medium">
				Operadoras
			</span>
		</Link>
	)
}
