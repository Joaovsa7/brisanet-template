import type { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import type { SliceComponentProps } from '@prismicio/react'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconBrandX,
	IconBrandYoutube,
	IconBuildingEstate,
	IconCalendar,
	IconDeviceLaptop,
	IconDeviceMobile,
	IconDeviceTablet,
	IconDeviceTv,
	IconDownload,
	IconFileText,
	IconHeadset,
	IconHelp,
	IconHome,
	IconHomeSignal,
	IconMapPin,
	IconMessages,
	IconNetwork,
	IconNews,
	IconPdf,
	IconPhone,
	IconTool,
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
	Facebook: IconBrandFacebook,
	Instagram: IconBrandInstagram,
	Twitter: IconBrandX,
	Ferramenta: IconTool,
	Chat: IconMessages,
	PDF: IconPdf,
	Empresa: IconBuildingEstate,
	Localização: IconMapPin,
	'Wi-Fi': IconWifi,
	YouTube: IconBrandYoutube,
	LinkedIn: IconBrandLinkedin,
	Casa: IconHome
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

				<div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:gap-6 md:grid-cols-4">
					{slice.items.map((item: Content.LinksCardSliceDefaultItem) => {
						const Icon = ICONS[item.icon ?? 'Arquivo']

						return (
							<PrismicNextLink
								key={item.title}
								field={item.link}
								prefetch={false}
								data-highlight={slice.items[0].title === item.title}
								className="group min-h-36 min-w-36 p-3 shadow rounded flex flex-col gap-4 justify-between hover:shadow-lg transition-shadow data-[highlight=false]:bg-white data-[highlight=true]:bg-primary data-[highlight=true]:text-white"
							>
								<Icon className="size-7 text-primary group-data-[highlight=true]:text-white" />
								<h3 className="font-semibold text-lg sm:text-xl text-secondary group-data-[highlight=true]:text-white">
									{item.title}
								</h3>
								{item.description && (
									<p className="font-medium sr-only lg:not-sr-only">
										{item.description}
									</p>
								)}
							</PrismicNextLink>
						)
					})}
				</div>
			</Container>
		</Section>
	)
}
