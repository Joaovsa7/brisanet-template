import type { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import {
	IconBrandWhatsapp,
	IconCalendar,
	IconDeviceLaptop,
	IconDeviceMobile,
	IconDeviceTablet,
	IconDeviceTv,
	IconDownload,
	IconFileText,
	IconHeadset,
	IconHelp,
	IconHomeSignal,
	IconNetwork,
	IconNews,
	IconPhone,
	IconUpload,
	IconWifi
} from '@tabler/icons-react'

import { Container } from '~/components/container'
import { RichText } from '~/components/rich-text'
import { Section } from '~/components/section'

const ICONS = {
	Ajuda: IconHelp,
	Arquivo: IconFileText,
	Calendário: IconCalendar,
	Download: IconDownload,
	Headset: IconHeadset,
	Instalação: IconHomeSignal,
	Internet: IconNetwork,
	Jornal: IconNews,
	Laptop: IconDeviceLaptop,
	Smartphone: IconDeviceMobile,
	Tablet: IconDeviceTablet,
	Telefone: IconPhone,
	TV: IconDeviceTv,
	Upload: IconUpload,
	WhatsApp: IconBrandWhatsapp,
	'Wi-Fi': IconWifi
}

export type LinksCardProps = SliceComponentProps<Content.LinksCardSlice>

export default function LinksCard({ slice }: LinksCardProps) {
	if (slice.items.length <= 0) {
		return null
	}

	return (
		<Section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<RichText field={slice.primary.title} className="prose-headings:mt-0" />

				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{slice.items.map((item: Content.LinksCardSliceDefaultItem) => {
						const Icon = ICONS[item.icon ?? 'Arquivo']

						return (
							<PrismicNextLink
								key={item.title}
								field={item.link}
								prefetch={false}
								className="p-6 bg-white shadow rounded flex flex-col gap-4 hover:shadow-md transition-shadow"
							>
								<Icon className="w-10 h-10 text-primary" />
								<h3 className="text-xl text-secondary">{item.title}</h3>
								{item.description && <p>{item.description}</p>}
							</PrismicNextLink>
						)
					})}
				</div>
			</Container>
		</Section>
	)
}
