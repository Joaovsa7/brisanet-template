import { type Content, isFilled } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/carousel'
import { Container } from '~/components/container'
import { ProductCard } from '~/components/product-card'
import { RichText } from '~/components/rich-text'

export type ProductsCarouselProps =
	SliceComponentProps<Content.ProductsCarouselSlice>

export default function ProductsCarousel({ slice }: ProductsCarouselProps) {
	const products = slice.items.map((item) => {
		const itemIsFilled = isFilled.contentRelationship(item.product)

		if (!itemIsFilled) {
			return false
		}

		return item.product
	}) as unknown as Content.ProductDocument[]

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<RichText field={slice.primary.title} />
				<Carousel>
					<CarouselContent>
						{products.map((product) => {
							const benefits = product.data.benefits.map((benefit) => ({
								name: benefit.benefit as string,
								icon: benefit.icon
							}))

							return (
								<CarouselItem
									key={product.id}
									className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
								>
									<ProductCard
										name={product.data.name as string}
										benefits={benefits}
										price={product.data.price as string}
										isPromotion={product.data.is_promotion}
									/>
								</CarouselItem>
							)
						})}
					</CarouselContent>

					<div className="mx-auto w-fit mt-6">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
			</Container>
		</section>
	)
}
