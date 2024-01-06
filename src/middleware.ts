import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createClient } from '~/libs/prismicio'

export async function middleware(request: NextRequest) {
	try {
		const client = createClient()

		const document = await client.getSingle('redirects')

		const redirect = document.data.redirects.find((redirect) => {
			return redirect.origin === request.url
		})

		if (!redirect) {
			return NextResponse.next()
		}

		return NextResponse.redirect(String(redirect.destination), {
			status: 301
		})
	} catch {
		return NextResponse.next()
	}
}
