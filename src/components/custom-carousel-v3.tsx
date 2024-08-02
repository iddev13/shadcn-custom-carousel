'use client';

import { useEffect, useState } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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

export const CustomCarouselV3 = ({ className }: { className?: string }) => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap());
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className={cn(className)}>
			<h1 className="text-2xl font-bold mb-4 text-center">Custom slider V3</h1>
			<Carousel
				setApi={setApi}
				opts={{ loop: true }}
				className="w-[300px] h-[230px] bg-slate-100"
			>
				<CarouselContent>
					{sliderData.map((slide) => (
						<CarouselItem
							className="flex items-center justify-center"
							key={slide.id}
						>
							<Image
								src={slide.path}
								alt={slide.alt}
								width={slide.width}
								height={slide.height}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="flex items-center justify-around mt-2">
				<div>
					{sliderData.map((dot, index) => {
						return (
							<span
								className={cn(
									'bg-slate-300/70 inline-block w-4 h-2 mr-2 rounded-md cursor-pointer transition ease-in-out',
									current === index && 'bg-amber-400 w-8'
								)}
								onClick={() => {
									api?.scrollTo(index);
								}}
							/>
						);
					})}
				</div>
				<div className="flex items-center justify-center gap-x-3">
					<Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
					<Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
				</div>
			</div>
		</div>
	);
};
