'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SliderDataType = {
	id: number;
	path: string;
	alt: string;
	width: number;
	height: number;
};

const sliderData: SliderDataType[] = [
	{
		id: 1,
		path: '/assets/image/next.webp',
		alt: 'Image',
		width: 300,
		height: 230,
	},
	{
		id: 2,
		path: '/assets/image/formik.webp',
		alt: 'Image',
		width: 300,
		height: 230,
	},
	{
		id: 3,
		path: '/assets/image/framer-motion.webp',
		alt: 'Image',
		width: 300,
		height: 230,
	},
	{
		id: 4,
		path: '/assets/image/tailwind.webp',
		alt: 'Image',
		width: 300,
		height: 230,
	},
	{
		id: 5,
		path: '/assets/image/typescript.webp',
		alt: 'Image',
		width: 300,
		height: 230,
	},
];

export const CustomCarouselV2 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	// const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		// setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap());

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className={cn(className)}>
			<h1 className="text-2xl font-bold mb-4 text-center">Custom slider V2</h1>
			<Carousel
				setApi={setApi}
				opts={{ loop: true, align: 'start' }}
				className="w-full max-w-sm"
			>
				<CarouselContent>
					{sliderData.map((slide, index) => (
						<CarouselItem className="md:basis-1/2 lg:basis-1/3 overflow-hidden rounded-md" key={slide.id}>
							<Card className="bg-pink-100">
								<CardContent className="relative flex flex-col aspect-square items-center justify-center p-6">
									<Image
										src={slide.path}
										alt={slide.alt}
										// width={slide.width}
										// height={slide.height}
										fill
									/>
									<span className="text-xl font-semibold">{index + 1}</span>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
			<div className="flex items-center justify-center gap-x-3 mt-2">
				<Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
				<Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
			</div>
		</div>
	);
};
