'use client'
import { CheckIcon, LinkIcon } from 'lucide-react'
import { useState } from 'react'
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterShareButton,
	XIcon
} from 'react-share'

interface IArticleShareButtonsProps {
	title: string
	url: string
}

export function ArticleShareButtons({ title, url }: IArticleShareButtonsProps) {
	const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

	function handleShareArticle() {
		if (navigator.share) {
			return navigator.share({
				title,
				url
			})
		}

		navigator.clipboard.writeText(location.href)
		setCopiedToClipboard(true)
		setTimeout(() => setCopiedToClipboard(false), 2000)
	}

	return (
		<div>
			<span className="block mb-2 text-sm font-medium">
				{hasCopiedToClipboard
					? 'Link do artigo copiado!'
					: 'Compartilhe este artigo'}
			</span>
			<div className="flex items-center gap-2">
				<button
					type="button"
					onClick={handleShareArticle}
					className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center transition-transform duration-300 hover:-translate-y-0.5"
				>
					{hasCopiedToClipboard ? (
						<CheckIcon className="w-5 h-5" />
					) : (
						<LinkIcon className="w-5 h-5" />
					)}
				</button>
				<FacebookShareButton url={url}>
					<FacebookIcon className="w-10 h-10 rounded-full transition-transform duration-300 hover:-translate-y-0.5" />
				</FacebookShareButton>
				<LinkedinShareButton url={url}>
					<LinkedinIcon className="w-10 h-10 rounded-full transition-transform duration-300 hover:-translate-y-0.5" />
				</LinkedinShareButton>
				<TwitterShareButton url={url}>
					<XIcon className="w-10 h-10 rounded-full transition-transform duration-300 hover:-translate-y-0.5" />
				</TwitterShareButton>
			</div>
		</div>
	)
}
