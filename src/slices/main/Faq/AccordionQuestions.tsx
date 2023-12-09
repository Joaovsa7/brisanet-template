'use client'
import { Accordion } from '~/components/accordion'
import { RichText } from '~/components/rich-text'

import { FaqDocumentDataFrequentlyAskedQuestionsItem } from '../../../../prismicio-types'

export function AccordionQuestions({
	items
}: {
	items: FaqDocumentDataFrequentlyAskedQuestionsItem[]
}) {
	return (
		<Accordion.Root type="single">
			{items.map((item) => {
				return (
					<Accordion.Item
						key={item.question as string}
						value={item.question as string}
					>
						<Accordion.Trigger>{item.question}</Accordion.Trigger>
						<Accordion.Content>
							<RichText field={item.answer} />
						</Accordion.Content>
					</Accordion.Item>
				)
			})}
		</Accordion.Root>
	)
}
