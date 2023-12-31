import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'
import { AccordionQuestions } from './AccordionQuestions'

import { Container } from '~/components/container'
import { FaqDocumentData } from '../../../../prismicio-types'

export type FaqProps = SliceComponentProps<Content.FaqSlice>

export default async function Faq({ slice }: FaqProps) {
	if (!isFilled.contentRelationship(slice.primary.faq)) {
		return null
	}

	const { title, frequently_asked_questions } = slice.primary.faq
		.data as FaqDocumentData

	const titleIsFilled = isFilled.richText(title)
	const questionsIsFilled = isFilled.group(frequently_asked_questions)

	if (!questionsIsFilled) {
		return null
	}

	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="py-12"
		>
			<Container size="sm">
				{titleIsFilled && (
					<RichText field={title} className="mb-6 text-center" />
				)}
				<AccordionQuestions items={frequently_asked_questions} />
			</Container>
		</Section>
	)
}
