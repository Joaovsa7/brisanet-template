'use client';

import { type Content } from '@prismicio/client';
import type { SliceComponentProps } from '@prismicio/react';

import { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '~/components/carousel';
import { Container } from '~/components/container';
import { ProductCard } from '~/components/product-card';
import { RichText } from '~/components/rich-text';
import { brisanetService } from '~/services/brisanet';
import { ListCities } from './ListCities';

export type ProductsCarouselProps =
	SliceComponentProps<Content.ProductsCarouselSlice>

export default function ProductsCarousel({ slice }: ProductsCarouselProps) {
	const [products, setProducts] = useState([]);
	const [selectedCity, setSelectedCity] = useState(slice.primary?.defaultCity || "74")
	console.log({ selectedCity })
	useEffect(() => {
		brisanetService.getProductsByCity(selectedCity).then((data) => {
			setProducts(data.services[0].services.data)
		});
	}, [selectedCity])

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<div className="flex items-center justify-between">
					<RichText field={slice.primary.title} />
					<ListCities onSelect={setSelectedCity} />
				</div>
				<Carousel>
					<CarouselContent>
						{products?.map?.((data) => {
							const product = data?.attributes
							const benefits = product.informations.map((info) => ({
								name: info.name, icon: info.icon.data.attributes.url
							}))

							return (
								<CarouselItem
									key={product.id}
									className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
								>
									<ProductCard
										name={`${product.speed.data.attributes.value}MEGA`as string}
										benefits={benefits}
										price={product.price as string}
										// isPromotion={product.data.is_promotion}
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
