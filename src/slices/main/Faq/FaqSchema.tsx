import { asText } from '@prismicio/client'

import type { IAccordionQuestion } from './AccordionQuestions'

export function FaqSchema({ items }: { items: IAccordionQuestion[] }) {
	const mainEntity = items.map((item) => ({
		'@type': 'Question',
		answerCount: 1,
		name: item.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: asText(item.answer)
		}
	}))

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema)
			}}
		/>
	)
}
