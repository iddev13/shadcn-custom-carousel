import { Separator } from '@/components/ui/separator';
import { CustomCarousel } from '@/components/custom-carousel';
import { CustomCarouselV2 } from '@/components/custom-carousel-v2';
import { CustomCarouselV3 } from '@/components/custom-carousel-v3';
import { CustomCarouselV4 } from '@/components/custom-carousel-v4';

export default function Home() {
	return (
		<main className="flex min-h-screen items-center flex-col py-12">
			<CustomCarousel className="pb-4" />
			<Separator />
			<CustomCarouselV2 className="py-4" />
			<Separator />
			<CustomCarouselV3 className="py-4" />
			<Separator />
			<CustomCarouselV4 className="py-4" />
			<Separator />
		</main>
	);
}

// ? In tailwind.config.ts
// transitionProperty: {
// 	width: 'width',
// },
