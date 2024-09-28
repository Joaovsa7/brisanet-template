import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		BASE_URL: z.string().optional(),
		PRISMIC_ACCESS_TOKEN: z.string().min(1),
		PRISMIC_REPOSITORY_NAME: z.enum([
			'telefone-da-brisanet',
			'numero-da-brisanet',
			'planobrisanet'
		])
	},

	client: {
		NEXT_PUBLIC_SITE_NAME: z.string().min(1),
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional()
	},

	runtimeEnv: {
		NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
			process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
		BASE_URL: process.env.BASE_URL,
		PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
		PRISMIC_REPOSITORY_NAME: process.env.PRISMIC_REPOSITORY_NAME
	}
})
