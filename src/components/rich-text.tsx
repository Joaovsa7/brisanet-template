import { PrismicRichText } from '@prismicio/react'
import type { JSXMapSerializer, PrismicRichTextProps } from '@prismicio/react'

import { slugify } from '~/utils/slugify'

import { Text } from './text'

interface IRichTextProps extends PrismicRichTextProps {
	className?: string
}

const components: JSXMapSerializer = {
	heading1: ({ children, text }) => <h1 id={slugify(text)}>{children}</h1>,
	heading2: ({ children, text }) => <h2 id={slugify(text)}>{children}</h2>,
	heading3: ({ children, text }) => <h3 id={slugify(text)}>{children}</h3>,
	heading4: ({ children, text }) => <h4 id={slugify(text)}>{children}</h4>,
	heading5: ({ children, text }) => <h5 id={slugify(text)}>{children}</h5>,
	heading6: ({ children, text }) => <h6 id={slugify(text)}>{children}</h6>
}

export function RichText({ className, ...props }: IRichTextProps) {
	return (
		<Text className={className}>
			<PrismicRichText {...props} components={components} />
		</Text>
	)
}
