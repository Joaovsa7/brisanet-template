import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'
import { Video } from './Video'

export type IYouTubeVideoProps = SliceComponentProps<Content.YouTubeVideoSlice>

export default function YoutubeEmbed({ slice }: IYouTubeVideoProps) {
	const {
		title,
		description,
		video_id,
		video_title,
		video_upload_date,
		video_duration_time
	} = slice.primary

	if (!video_id) {
		return null
	}

	const videoUrl = `https://www.youtube-nocookie.com/embed/${video_id}?&autoplay=1`
	const thumbnailUrl = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'VideoObject',
						name: video_title,
						thumbnailUrl,
						uploadDate: video_upload_date,
						duration: video_duration_time,
						contentUrl: videoUrl,
						embedUrl: videoUrl
					})
				}}
			/>

			<Section
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
			>
				<Container className="text-center">
					<RichText field={title} className="prose-headings:m-0" />
					<RichText field={description} />
					<Video id={video_id} title={video_title as string} />
				</Container>
			</Section>
		</>
	)
}
