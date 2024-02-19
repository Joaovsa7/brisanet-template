import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

import { env } from '~/config/env'

const GOOGLE_ANALYTICS_ID = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string

export function GoogleAnalytics() {
	return <NextGoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
}
