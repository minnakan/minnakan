import { getPosts } from '@/app/utils';
import { Flex } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';
import { baseURL, person, work, gamesPortfolio} from '../resources';
import { redirect } from 'next/navigation';

export function generateMetadata() {
	const title = gamesPortfolio.title;
	const description = gamesPortfolio.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/GamesPortfolio`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Work() {
    redirect('https://minnakan.com/playground');
}