import { KeyTextField } from '@prismicio/client'

export function GoogleStructuredData({
	data
}: { data: KeyTextField | string }) {
	if (!data) {
		return null
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data)
			}}
		/>
	)
}
