export type ProjectType = {
    id: string;
    category: 'Personal' | 'Awards & Certifications' | 'Activities' | 'Research';
    title: string;
    description: string;
    link?: string;
    image?: string;
}

export const projects: ProjectType[] = [
    {
        id: '1',
        category: 'Research',
        title: 'Enhancing Attitudes and Engagement in First-Year Computer Engineering Students',
        description: 'Contributed to the development of IoT sensor modules.',
        link: 'https://onlinelibrary.wiley.com/doi/10.1002/cae.70020?af=R',
    },
    {
        id: '2',
        category: 'Activities',
        title: 'President of Young Innovator Club',
        description: 'Led a team of young innovators, contributing to the development of creative solutions for local community issues during the 2025 academic year.',
    },
    {
        id: '3',
        category: 'Awards & Certifications',
        title: 'Thailand New Gen Inventors Award',
        description: 'Awarded a Silver Medal at the Thailand New Gen Inventors Award, Academic Year 2025.',
    },
    {
        id: '4',
        category: 'Awards & Certifications',
        title: 'Outstanding Student Award',
        description: 'Received the Outstanding Student certificate in Creativity and Innovation, Academic Year 2025.',
    },
    {
        id: '5',
        category: 'Awards & Certifications',
        title: 'Outstanding Academic Achievement Award',
        description: 'Certificate for outstanding academic achievement for the academic years 2023-2025.',
    },
    {
        id: '6',
        category: 'Activities',
        title: 'KU Startup Bootcamp for Entrepreneurs',
        description: 'Completed the KU Startup Bootcamp for Entrepreneurs in 2024, focusing on developing entrepreneurial skills.',
    },
    {
        id: '7',
        category: 'Activities',
        title: 'Leadership Development Program X',
        description: 'Completed the Leadership Development Program X with CP All Public Company Limited in 2025.',
    }, 
]