import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export const experiences = [
    {
        name: "Full Stack Developer Intern",
        duration: "Jan 2021 - Aug 2021",
        company: "GoalsMapper Pte Ltd",
        desc: [
            "Collaborate with the Product Development Team on the development of the platform with over 2,000 users", 
            "Design and build mobile responsive frontend application using React, including translating mock-ups into code", 
            "Develop and design RESTful APIs and functional databases on the backend", 
            "Perform unit testing using Endtest"
        ]
    },
    {
        name: "Product Intern",
        duration: "Aug 2020 - Jan 2021",
        company: "LoveBonito Pte Ltd",
        desc: [
            "Analyse end customer problems through data analysis using Google Analytics", 
            "Update on onsite touchpoints and create pop-ups for websites using HTML, CSS and JavaScript", 
            "Create UI/UX designs using Figma and Photoshop and conduct A/B testing with Google Optimise", 
            "Create solutions through detailing out workflows and system interactions on FluidUI"
        ]
    }
];

export const expertise = 'Web Design and Development, Full Stack Development, iOS Development, Artificial Intelligence, Product Management, UI/UX';

export const introduction = 'I’m Michelle, a Web Designer and Developer based in Singapore. Currently a final year student pursuing the Bachelor of Computing in Computer Science at NUS and was previously part of the NUS Overseas College Program. I have experience interning with Love, Bonito as a Product Intern and GoalsMapper as a Full Stack Developer.';

export const pages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

export const socials = [
    {
        label: "LinkedIn",
        icon: <LinkedInIcon />,
        href: "https://www.linkedin.com/in/michelle-yong"
    },
    {
        label: "Github",
        icon: <GitHubIcon />,
        href: "https://github.com/michelleykw"
    },
    {
        label: "Instagram",
        icon: <InstagramIcon />,
        href: "https://www.instagram.com/immychelle"
    },
    {
        label: "Email",
        icon: <EmailIcon />,
        href: "mailto:michelle.yong@u.nus.edu"
    }
];

export const tools = [
    {
        name: 'Development - Frontend',
        toolList: ['React', 'Redux', 'NextJS', 'Jest']
    },
    {
        name: 'Development - Backend',
        toolList: ['Django Python', 'PostgreSQL', 'MongoDB', 'NodeJS', 'Docker', 'Redis', 'CircleCI']
    },
    {
        name: 'UI/UX Design',
        toolList: ['Figma', 'Adobe XD', 'FluidUI', 'Balsamiq', 'WordPress', 'Wix']
    },
    {
        name: 'Illustration',
        toolList: ['Adobe Photoshop', 'Adobe Illustrator', 'GIMP', 'iMovie', 'Canva']
    },
    {
        name: 'Product Management',
        toolList: ['Jira', 'Confluence', 'Hotjar', 'Google Drive', 'Google Analytics', 'Google Optimize']
    },
    {
        name: 'Programming Languages',
        toolList: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS', 'TypeScript', 'C++']
    }
];
