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
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data)
			}}
		/>
	)
}
