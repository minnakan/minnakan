import { getPosts } from '@/app/utils';
import { Flex } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';
import { baseURL, person, work, gamesPortfolio} from '../resources';

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
    let allProjects = getPosts(['src', 'app', 'gamesPortfolio', 'projects']);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: gamesPortfolio.title,
                        description: gamesPortfolio.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: project.metadata.publishedAt,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />
            <Projects/>
        </Flex>
    );
}