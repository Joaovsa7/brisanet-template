import { RTLinkNode } from '@prismicio/client'
import type { JSXMapSerializer, PrismicRichTextProps } from '@prismicio/react'

import { slugify } from '~/utils/slugify'

import { asHTML } from '@prismicio/client'
import { Text } from './text'

interface IRichTextProps extends PrismicRichTextProps {
	className?: string
}

type NodeHyperlinkData = RTLinkNode['data'] & {
	target: '_blank' | '_self'
}

const components: JSXMapSerializer = {
	heading1: ({ children, text }) => <h1 id={slugify(text)}>{children}</h1>,
	heading2: ({ children, text }) => <h2 id={slugify(text)}>{children}</h2>,
	heading3: ({ children, text }) => <h3 id={slugify(text)}>{children}</h3>,
	heading4: ({ children, text }) => <h4 id={slugify(text)}>{children}</h4>,
	heading5: ({ children, text }) => <h5 id={slugify(text)}>{children}</h5>,
	heading6: ({ children, text }) => <h6 id={slugify(text)}>{children}</h6>,

	hyperlink: ({ children, node }) => {
		const url = node.data.url
		const href = url ? url.replaceAll('--', '/') : ''

		const nodeData = node.data as unknown as NodeHyperlinkData
		const target = nodeData.target ?? '_self'

		return (
			<a
				href={href}
				target={target}
				{...(target === '_blank' && {
					rel: 'noopener'
				})}
			>
				{children}
			</a>
		)
	}
}

export function RichText({ className, field, ...props }: IRichTextProps) {
	if (!field) {
		return null
	}

	return (
		<Text
			className={className}
			dangerouslySetInnerHTML={{ __html: asHTML(field) }}
		/>
	)
}
