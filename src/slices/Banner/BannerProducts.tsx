import { type Content, asHTML, isFilled } from '@prismicio/client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/carousel'
import { Container } from '~/components/container'
import { ProductCard } from '~/components/product-card'

type BannerProductsProps = Content.BannerSliceBannerProducts & {
	slice_type: string
}

export function BannerProducts({
	primary,
	slice_type,
	variation
}: BannerProductsProps) {
	const products = primary.products.map((item) => {
		const itemIsFilled = isFilled.contentRelationship(item.product)

		if (!itemIsFilled) {
			return false
		}

		return item.product
	}) as unknown as Content.ProductDocument[]

	return (
		<section
			data-slice-type={slice_type}
			data-slice-variation={variation}
			className="bg-primary py-10"
		>
			<Container size="lg" className="space-y-8">
				<span
					dangerouslySetInnerHTML={{ __html: asHTML(primary.title) }}
					className="text-3xl font-bold tracking-tight text-center block text-neutral-50"
				/>

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
