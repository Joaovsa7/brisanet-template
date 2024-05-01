import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { createClient } from '~/libs/prismicio'
import { Container } from './container'

export async function ConversionBar() {
	const client = createClient()

	try {
		const conversionBarDocument = await client.getSingle('conversion_bar')

		const { text, cta_label, cta_link } = conversionBarDocument.data

		if (!isFilled.keyText(text)) {
			return null
		}

		return (
			<div className="bg-secondary py-2 animate-apperFromTop">
				<Container
					size={'lg'}
					className="flex flex-col items-center justify-center"
				>
					<p className="text-center text-base text-white font-medium">
						{text}{' '}
						<PrismicNextLink
							field={cta_link}
							prefetch={false}
							className="underline underline-offset-4 font-bold"
						>
							{cta_label ?? 'Assine já'}
						</PrismicNextLink>
					</p>
				</Container>
			</div>
		)
	} catch {
		return null
	}
}
