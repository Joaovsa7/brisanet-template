import { redirectToPreviewURL } from '@prismicio/next'
import type { NextRequest } from 'next/server'

import { prismicio } from '../../../libs/prismicio'

export async function GET(request: NextRequest) {
	return await redirectToPreviewURL({ client: prismicio, request })
}
