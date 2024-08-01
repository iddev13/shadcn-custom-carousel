'use client';

import { useEffect, useState } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
];

export const CustomCarousel = () => {
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
		<div>
			<h1 className="text-2xl font-bold mb-4">Custom slider</h1>
			<Carousel
				setApi={setApi}
				opts={{ loop: true }}
				className="w-[300px] h-[230px]"
			>
				<CarouselContent>
					{sliderData.map((slide) => (
						<CarouselItem
							className="relative w-[300px] h-[230px]"
							key={slide.id}
						>
							<Image src={slide.path} alt={slide.alt} fill />
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
			<div className="flex items-center justify-center gap-x-3 mt-4">
				<Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
				<Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
			</div>
		</div>
	);
};
