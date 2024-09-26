import {
	IconCircleCheck,
	IconDeviceMobile,
	IconDownload,
	IconHeadset,
	IconHomeSignal,
	IconNetwork,
	IconPhone,
	IconUpload,
	IconWifi
} from '@tabler/icons-react'


import { Button } from './button'

const PRODUCT_BENEFIT_ICONS = {
	Check: IconCircleCheck,
	Download: IconDownload,
	Instalaçao: IconHomeSignal,
	Internet: IconNetwork,
	Smartphone: IconDeviceMobile,
	Suporte: IconHeadset,
	Telefone: IconPhone,
	Upload: IconUpload,
	'Wi-Fi': IconWifi
}

export interface IProductBenefit {
	name: string
	icon: keyof typeof PRODUCT_BENEFIT_ICONS
}

interface IProductCardProps {
	name: string
	benefits: IProductBenefit[]
	price: string
	isPromotion?: boolean
}

export function ProductCard({
	name,
	price,
	benefits,
	isPromotion
}: IProductCardProps) {
	const productBenefits = benefits.map((benefit) => benefit.name)

	return (
		<article
			data-promotion={isPromotion}
			className="p-6 bg-white flex flex-col gap-6 h-full data-[promotion=true]:relative data-[promotion=true]:pt-14 overflow-hidden rounded"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Product',
						name,
						image: 'https://telefonedabrisanet.com.br/brisanet-logo.png',
						description: `Plano de internet ${name} com ${productBenefits.join(
							', '
						)} por apenas ${price} por mês.`,
						shippingDetails: {
							'@type': 'OfferShippingDetails',
							shippingDestination: {
								'@type': 'Country',
								name: 'BR'
							},
							shippingRate: {
								'@type': 'MonetaryAmount',
								currency: 'BRL',
								value: 0
							}
						},
						hasMerchantReturnPolicy: {
							'@type': 'MerchantReturnPolicy',
							name: 'Garantia padrão de mercado e direito a cancelamento',
							url: 'https://www.brisanet.com.br/central-de-ajuda'
						},
						offers: {
							'@type': 'Offer',
							url: process.env.BASE_URL,
							priceCurrency: 'BRL',
							price,
							priceValidUntil: '2025-01-01',
							availability: 'https://schema.org/InStock',
							itemCondition: 'https://schema.org/NewCondition'
						}
					})
				}}
			/>
			<header>
				{isPromotion && (
					<span className="absolute top-0 left-0 right-0 bg-secondary text-white p-2 uppercase font-semibold text-center">
						Melhor oferta
					</span>
				)}
				<h3 className="font-semibold text-4xl text-primary tracking-tight">
					{name}
				</h3>
			</header>
			<main className="flex-1">
				<ul className="flex flex-col gap-2">
					{benefits.map((benefit, index) => {
						return (
							<li
								key={benefit.name}
								className="flex items-start gap-1.5 text-secondary font-medium"
							>
								<img src={benefit.icon} alt={`${index}-${benefit.name}`} />
								<span className="flex-1">{benefit.name}</span>
							</li>
						)
					})}
				</ul>
			</main>
			<footer className="flex flex-col gap-4">
				<h3 className="text-secondary font-semibold text-4xl">
					{Intl.NumberFormat('pt-BR', {
						currency: 'BRL',
						style: 'currency'
					}).format(Number(price))}
					<span className="text-2xl font-normal">/mês</span>
				</h3>
				<Button asChild size="sm" className="w-full">
					<a
						href="https://assine.parceirosbrisanet.com.br/assine/?resellerId=10563"
						target="_blank"
						rel="noreferrer"
					>
						Assine já
					</a>
				</Button>
			</footer>
		</article>
	)
}
