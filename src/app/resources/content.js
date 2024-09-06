import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Minnakan',
    lastName:  'Seral',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Engineer and Game Developer',
    avatar:    '/images/avatar.png',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <></>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/minnakan',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/minnakan-seral-b75779159/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:minnakan@gmail.com',
    },
    {
        name: 'Resume',
        icon: 'download',
        link: 'https://drive.google.com/file/d/1XGBYGMiYRXynBpma46Ufh2KMzGRM3r4H/view?usp=sharing',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Engineer and Game Developer</>,
    subline: <></>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: true
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Computer engineer specializing in game development, VR, and immersive 3D experiences, with expertise in Unreal Engine, Unity, and cutting-edge reinforcement learning techniques.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Brain Game Center (UCR)',
                timeframe: 'Mar 2024 - Present',
                role: 'Unity Programming Intern',
                achievements: [
                    <>Actively contributing as a part-time developer in creating cognitive-based games rooted in research conducted at the BGC.</>,
                    <>Proficiently integrated tutorial screens and game components featuring dynamic animations and maintained consistent styling throughout various game projects.</>
                ],
                images: []
            },
            {
                company: 'Renderpub',
                timeframe: 'Jan 2021 – Jul 2023',
                role: 'Unreal Engine Developer',
                achievements: [
                    <>Developed a 3D rendering application for Arch-Viz using Unreal Engine 4.</>,
                    <>Implemented key features including user authentication, sky/weather systems, and 3D model import/export.</>,
                    <>Ported three.js to Unreal Engine to provide runtime scripting functionalities for the application.</>,
                    <>Utilized OpenCV and Assimp for export functionalities and made API calls to upload files to an R2 bucket for web-based walkthroughs.</>,
                    <>Led product development strategy, managing a team to deliver a beta version successfully.</>,
                    <>Developed client projects, including a VR driving simulator and a multiplayer experience for the Oculus Quest, deploying a multiplayer server on AWS Gamelift.</>
                ],
                images: [
                    {
                        src: '/images/projects/Work1/rp1.png',
                        alt: 'RenderpubStudio1',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Work1/rp2.png',
                        alt: 'RenderpubStudio2',
                        width: 16,
                        height: 9
                    }
                 ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of California, Riverside',
                description: <>Master of Science in Computer Engineering</>,
            },
            {
                name: 'City, University of London',
                description: <>BSc (Hons.) Computer Science with Games Technology</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gamesPortfolio = {
    label: 'Portfolio',
    title: 'My projects',
    description: `Game dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery, gamesPortfolio };