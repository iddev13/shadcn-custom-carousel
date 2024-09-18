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
];

export const CustomCarouselFullScreen = ({
	className,
}: {
	className?: string;
}) => {
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
		<div className={cn('w-full relative', className)}>
			<Carousel setApi={setApi} opts={{ loop: true }}>
				<CarouselContent>
					{sliderData.map((slide) => (
						<CarouselItem
							className="flex items-center justify-center w-full h-[80vh] relative"
							key={slide.id}
						>
							<Image
								src={slide.path}
								alt={slide.alt}
								fill
								className="object-cover z-10"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
			<div className="absolute top-full -translate-x-[calc(100%+2vw)] -translate-y-[100px] left-full flex items-center justify-center gap-x-3 mt-2 bg-green-500">
				<Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
				<Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
			</div>
		</div>
	);
};
