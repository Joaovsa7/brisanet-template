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
import { ProductSkeleton } from './ProductSkeleton';
import { SelectCityModal } from './SelectCityModal';

export type ProductsCarouselProps =
	SliceComponentProps<Content.ProductsCarouselSlice>

export default function ProductsCarousel({ slice }: ProductsCarouselProps) {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedCity, setSelectedCity] = useState(slice.primary?.defaultCity || "96")

	useEffect(() => {
		setIsLoading(true);
		const fromSessionStorage = window.sessionStorage.getItem('@brisanet/city')

		if (fromSessionStorage) {
			setSelectedCity(fromSessionStorage)
		}

		brisanetService.getProductsByCity(fromSessionStorage || selectedCity).then((data) => {
			const results = data.services[0].services.data;

			setProducts(results);
			setIsLoading(false);
		});
	}, [selectedCity]);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Container size="lg">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<RichText field={slice.primary.title} />
					<SelectCityModal currentCity={selectedCity} onSelect={id => {
						window.sessionStorage.setItem('@brisanet/city', id.city);
						return setSelectedCity(id.city);
					}} />
				</div>
				{
					isLoading ? (
						<div className="flex gap-4">
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
							<ProductSkeleton />
						</div>
					) : (
						<Carousel>
							<CarouselContent>
								{products.length > 0 ? products?.map?.((data) => {
									const product = data?.attributes
									const benefits = product?.informations?.map?.((info) => ({
										name: info.name, icon: info.icon.data.attributes.url
									})) || []

									return (
										<CarouselItem
											key={product.id}
											className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
										>
											<ProductCard
												name={`${product.speed.data.attributes.value}MEGA` as string}
												benefits={benefits}
												price={product.price as string}
											/>
										</CarouselItem>
									)
								}) : (
									<div className='w-full p-10 bg-primary text-white text-2xl rounded-md'>
										Sem disponibilidade para a sua região
									</div>
								)}
							</CarouselContent>

							<div className="mx-auto w-fit mt-6">
								<CarouselPrevious />
								<CarouselNext />
							</div>
						</Carousel>
					)
				}

			</Container>
		</section>
	)
}
