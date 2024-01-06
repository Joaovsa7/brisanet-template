'use client'
import { KeyTextField, RichTextField } from '@prismicio/client'

import { Accordion } from '~/components/accordion'
import { RichText } from '~/components/rich-text'

export interface IAccordionQuestion {
	question: KeyTextField
	answer: RichTextField
}

export function AccordionQuestions({
	items
}: {
	items: IAccordionQuestion[]
}) {
	return (
		<Accordion.Root type="single" className="mt-8">
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
