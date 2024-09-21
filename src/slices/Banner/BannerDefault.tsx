import { type Content, asHTML, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { type IProductBenefit, ProductCard } from '~/components/product-card'

type BannerDefaultProps = Content.BannerSliceDefault & {
	slice_type: string
}

export function BannerDefault({
	primary,
	slice_type,
	variation
}: BannerDefaultProps) {
	const {
		cta_label,
		cta_link,
		description,
		product: relatedProduct,
		title
	} = primary

	const relatedProductIsFilled = isFilled.contentRelationship(relatedProduct)
	const titleIsFilled = isFilled.richText(title)
	const descriptionIsFilled = isFilled.richText(description)
	const ctaIsFilled = isFilled.keyText(cta_label) && isFilled.link(cta_link)

	const product = relatedProduct as unknown as Content.ProductDocument

	return (
		<section
			data-slice-type={slice_type}
			data-slice-variation={variation}
			className="bg-primary"
		>
			<Container
				size="lg"
				className="py-8 sm:min-h-96 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between gap-8"
			>
				<div>
					<div
						data-product={relatedProductIsFilled}
						className="max-w-lg data-[product=true]:text-center md:data-[product=true]:text-left"
					>
						{titleIsFilled && (
							<span
								className="text-3xl md:text-5xl text-white font-semibold mb-6 tracking-tighter block"
								dangerouslySetInnerHTML={{
									__html: asHTML(primary.title)
								}}
							/>
						)}
						{descriptionIsFilled && (
							<span
								className="text-white text-lg font-medium block"
								dangerouslySetInnerHTML={{
									__html: asHTML(primary.description)
								}}
							/>
						)}
					</div>
					{ctaIsFilled && (
						<Button
							data-product={relatedProductIsFilled}
							size={{ initial: 'md', md: 'lg' }}
							variant="secondary"
							asChild
							className="w-full sm:w-fit data-[product=true]:hidden mt-8 md:data-[product=true]:flex"
						>
							<PrismicNextLink field={primary.cta_link} prefetch={false}>
								{primary.cta_label}
							</PrismicNextLink>
						</Button>
					)}
				</div>

				{relatedProductIsFilled && (
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
