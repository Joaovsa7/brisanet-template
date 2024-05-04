import { type Content, asHTML, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { type IProductBenefit, ProductCard } from '~/components/product-card'
import { BannerAd } from './BannerAd'

export interface IBannerProps {
	slice: Content.BannerSlice & {
		primary: Omit<Content.BannerSliceDefaultPrimary, 'product'> & {
			product: Content.ProductDocument & {
				data: Content.ProductDocumentData
			}
		}
	}
}

export default function Banner({ slice }: IBannerProps) {
	const isDefaultVariation = slice.variation === 'default'
	const isAdVariation = slice.variation === 'ad'

	if (isAdVariation) {
		return <BannerAd {...slice} />
	}

	const { cta_label, cta_link, description, product, title } = slice.primary

	const productIsFilled = isFilled.contentRelationship(product)

	if (isDefaultVariation) {
		const titleIsFilled = isFilled.richText(title)
		const descriptionIsFilled = isFilled.richText(description)
		const ctaIsFilled = isFilled.keyText(cta_label) && isFilled.link(cta_link)

		return (
			<section
				data-slice-type={slice.slice_type}
				data-slice-variation={slice.variation}
				className="bg-primary"
			>
				<Container
					size="lg"
					className="py-8 sm:min-h-96 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-8"
				>
					<div>
						<div
							data-product={productIsFilled}
							className="max-w-lg data-[product=true]:text-center md:data-[product=true]:text-left"
						>
							{titleIsFilled && (
								<span
									className="text-3xl md:text-5xl text-white font-semibold mb-6 tracking-tighter block"
									dangerouslySetInnerHTML={{
										__html: asHTML(slice.primary.title)
									}}
								/>
							)}
							{descriptionIsFilled && (
								<span
									className="text-white text-lg font-medium block"
									dangerouslySetInnerHTML={{
										__html: asHTML(slice.primary.description)
									}}
								/>
							)}
						</div>
						{ctaIsFilled && (
							<Button
								data-product={productIsFilled}
								size={{ initial: 'md', md: 'lg' }}
								variant="secondary"
								asChild
								className="w-full sm:w-fit data-[product=true]:hidden mt-8 md:data-[product=true]:flex"
							>
								<PrismicNextLink
									field={slice.primary.cta_link}
									prefetch={false}
								>
									{slice.primary.cta_label}
								</PrismicNextLink>
							</Button>
						)}
					</div>

					{productIsFilled && (
						<ProductCard
							name={product.data.name as string}
							benefits={
								product.data.benefits.map((benefit) => ({
									icon: benefit.icon,
									name: benefit.benefit
								})) as IProductBenefit[]
							}
							price={product.data.price as string}
							isPromotion={product.data.is_promotion}
						/>
					)}
				</Container>
			</section>
		)
	}
}
