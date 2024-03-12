import { Logo } from '~/components/logo'

export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-primary fixed inset-0 z-50">
			<Logo isWhite className="w-56" />
		</div>
	)
}
