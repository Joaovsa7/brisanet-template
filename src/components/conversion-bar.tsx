import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { createClient } from '~/libs/prismicio'
import { Button } from './button'
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
			<div className="bg-primary py-3 sticky bottom-0">
				<Container
					size="lg"
					className="flex flex-col items-center justify-center gap-3 sm:justify-between sm:flex-row sm:gap-6"
				>
					<p className="text-center sm:text-left sm:text-xl text-white font-medium">
						{text}
					</p>
					<Button
						variant="secondary"
						size={{ initial: 'sm', sm: 'md' }}
						asChild
					>
						<PrismicNextLink field={cta_link} prefetch={false}>
							{cta_label ?? 'Assine já'}
						</PrismicNextLink>
					</Button>
				</Container>
			</div>
		)
	} catch {
		return null
	}
}
