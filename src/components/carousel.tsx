'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import useEmblaCarousel, {
	type UseEmblaCarouselType
} from 'embla-carousel-react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
	opts?: CarouselOptions
	plugins?: CarouselPlugin
	setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0]
	api: ReturnType<typeof useEmblaCarousel>[1]
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
	const context = React.useContext(CarouselContext)

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />')
	}

	return context
}

const Carousel = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel(
		{
			...opts,
			axis: 'x'
		},
		plugins
	)
	const [canScrollPrev, setCanScrollPrev] = React.useState(false)
	const [canScrollNext, setCanScrollNext] = React.useState(false)

	const onSelect = React.useCallback((api: CarouselApi) => {
		if (!api) {
			return
		}

		setCanScrollPrev(api.canScrollPrev())
		setCanScrollNext(api.canScrollNext())
	}, [])

	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev()
	}, [api])

	const scrollNext = React.useCallback(() => {
		api?.scrollNext()
	}, [api])

	const handleKeyDown = React.useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'ArrowLeft') {
				event.preventDefault()
				scrollPrev()
			} else if (event.key === 'ArrowRight') {
				event.preventDefault()
				scrollNext()
			}
		},
		[scrollPrev, scrollNext]
	)

	React.useEffect(() => {
		if (!api || !setApi) {
			return
		}

		setApi(api)
	}, [api, setApi])

	React.useEffect(() => {
		if (!api) {
			return
		}

		onSelect(api)
		api.on('reInit', onSelect)
		api.on('select', onSelect)

		return () => {
			api?.off('select', onSelect)
		}
	}, [api, onSelect])

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api,
				opts,
				scrollPrev,
				scrollNext,
				canScrollPrev,
				canScrollNext
			}}
		>
			<div
				ref={ref}
				onKeyDownCapture={handleKeyDown}
				className={twMerge('relative', className)}
				role="region"
				aria-roledescription="carousel"
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	)
})
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	const { carouselRef } = useCarousel()

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div ref={ref} className={twMerge('flex -ml-4', className)} {...props} />
		</div>
	)
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			role="group"
			aria-roledescription="slide"
			className={twMerge('min-w-0 shrink-0 grow-0 basis-full pl-4', className)}
			{...props}
		/>
	)
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
	const { scrollPrev, canScrollPrev } = useCarousel()

	return (
		<button
			type="button"
			ref={ref}
			className={twMerge(
				'mx-1 text-white bg-primary inline-flex items-center justify-center size-10 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed',
				className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...props}
		>
			<IconArrowLeft className="size-5" />
			<span className="sr-only">Previous slide</span>
		</button>
	)
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
	const { scrollNext, canScrollNext } = useCarousel()

	return (
		<button
			type="button"
			ref={ref}
			className={twMerge(
				'mx-1 text-white bg-primary inline-flex items-center justify-center size-10 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed',
				className
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...props}
		>
			<IconArrowRight className="size-5" />
			<span className="sr-only">Next slide</span>
		</button>
	)
})
CarouselNext.displayName = 'CarouselNext'

export {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi
}
