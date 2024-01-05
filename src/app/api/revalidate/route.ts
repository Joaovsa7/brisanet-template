import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST() {
	revalidateTag('@portal-das-operadoras/prismic-tag')

	return NextResponse.json({ revalidated: true, now: Date.now() })
}
