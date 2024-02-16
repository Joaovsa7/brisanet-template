import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { Container } from '~/components/container'

import { ProductCard } from '~/components/product-card'
import { RichText } from '~/components/rich-text'
import { Slider, SliderItem } from '~/components/slider'
import { ProductDocument } from '../../../../prismicio-types'

export type ProductsCarouselProps =
	SliceComponentProps<Content.ProductsCarouselSlice>

export default function ProductsCarousel({ slice }: ProductsCarouselProps) {
	const products = slice.items.map((item) => {
		const itemIsFilled = isFilled.contentRelationship(item.product)

		if (!itemIsFilled) {
			return false
		}

		return item.product
	}) as unknown as ProductDocument[]

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<RichText field={slice.primary.title} />
				<Slider>
					{products.map((product) => {
						const benefits = product.data.benefits.map((benefit) => ({
							name: benefit.benefit as string,
							icon: benefit.icon
						}))

						return (
							<SliderItem key={product.id}>
								<ProductCard
									name={product.data.name as string}
									benefits={benefits}
									price={product.data.price as string}
								/>
							</SliderItem>
						)
					})}
				</Slider>
			</Container>
		</section>
	)
}
