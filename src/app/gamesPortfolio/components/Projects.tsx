import { getPosts } from '@/app/utils';
import { Flex } from '@/once-ui/components';

import { ProjectCard } from '@/app/components';

interface ProjectsProps {
    range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', 'gamesPortfolio', 'projects']);

    const sortedProjects = allProjects.sort((a, b) => {
        // return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
        return Number(a.metadata.order) - Number(b.metadata.order);
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    return (
        <Flex
            fillWidth gap="l" marginBottom="40" paddingX="l"
            direction="column">
            {displayedProjects.map((post) => (
                <ProjectCard
                    key={post.slug}
                    href={post.metadata.publishedAt}
                    images={post.metadata.images}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
            ))}
        </Flex>
    );
}