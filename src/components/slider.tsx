'use client'

import '@splidejs/react-splide/css'

import { ReactNode } from 'react'
const { Splide, SplideSlide } = require('@splidejs/react-splide')

export function Slider({ children }: { children: ReactNode }) {
	return (
		<Splide
			className="splide-slider"
			options={{
				perPage: 4,
				perMove: 1,
				gap: '1rem',
				arrows: false,
				pagination: true,
				breakpoints: {
					1280: {
						perPage: 3
					},
					1024: {
						perPage: 2,
						padding: {
							right: 120
						}
					},
					768: {
						perPage: 2,
						padding: {
							right: 40
						}
					},
					640: {
						perPage: 1,
						padding: {
							right: 40
						}
					}
				}
			}}
		>
			{children}
		</Splide>
	)
}

export function SliderItem({ children }: { children: ReactNode }) {
	return <SplideSlide>{children}</SplideSlide>
}
