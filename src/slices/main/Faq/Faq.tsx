import { type Content, isFilled } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'
import { AccordionQuestions } from './AccordionQuestions'
import { FaqSchema } from './FaqSchema'

export type FaqProps = SliceComponentProps<Content.FaqSlice>

export default async function Faq({ slice }: FaqProps) {
	const titleIsFilled = isFilled.richText(slice.primary.title)
	const questionsIsFilled = slice.items.length > 0

	if (!questionsIsFilled) {
		return null
	}

	const items = slice.items.map((item) => ({
		answer: item.anwser,
		question: item.question
	}))

	return (
		<>
			<FaqSchema items={items} />

			<Section
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
			>
				<Container size="lg">
					{titleIsFilled && (
						<RichText
							field={slice.primary.title}
							className="prose-headings:m-0"
						/>
					)}
					<AccordionQuestions items={items} />
				</Container>
			</Section>
		</>
	)
}
