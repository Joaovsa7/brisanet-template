// import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

import { env } from '~/config/env'

const GOOGLE_ANALYTICS_ID = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string

export function GoogleAnalytics() {
	// return <NextGoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />

	return (
		<>
			<script
				type="text/partytown"
				src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
			/>
			<script
				type="text/partytown"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `
				}}
			/>
		</>
	)
}
