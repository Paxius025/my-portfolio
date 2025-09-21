export type ProjectType = {
    id: string;
    category: 'Personal' | 'Awards' | 'Certifications' | 'Activities';
    title: string;
    description: string;
    link?: string;
    image?: string;
}

export const projects: ProjectType[] = [
    {
        id: '1',
        category: 'Personal',
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        link: 'https://www.example.com/portfolio',
        image: 'https://www.example.com/images/portfolio.png'
    },
    {
        id: '2',
        category: 'Awards',
        title: 'Best Developer Award',
        description: 'Received the Best Developer Award for outstanding performance in 2023.',
    },
    {
        id: '3',
        category: 'Certifications',
        title: 'Certified React Developer',
        description: 'Completed the React Developer Certification from XYZ Institute.',
        link: 'https://www.example.com/certification'
    }
]