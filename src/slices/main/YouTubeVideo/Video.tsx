'use client'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

interface IVideoProps {
	id: string
	title: string
}

export function Video({ id, title }: IVideoProps) {
	return (
		<LiteYouTubeEmbed
			id={id}
			title={title}
			poster="maxresdefault"
			announce="Assistir vídeo"
			webp
			activatedClass="active"
			wrapperClass="relative bg-cover aspect-video"
			iframeClass="w-full h-full aspect-video"
		/>
	)
}
