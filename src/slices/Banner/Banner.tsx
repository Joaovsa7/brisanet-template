import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import { BannerAd } from './BannerAd'
import { BannerDefault } from './BannerDefault'
import { BannerProducts } from './BannerProducts'

export type BannerProps = SliceComponentProps<Content.BannerSlice>

export default function Banner({ slice }: BannerProps) {
	switch (slice.variation) {
		case 'default':
			return <BannerDefault {...slice} />
		case 'ad':
			return <BannerAd {...slice} />
		case 'bannerProducts':
			return <BannerProducts {...slice} />
		default:
			return null
	}
}
