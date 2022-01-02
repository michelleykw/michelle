import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import roomi from '../resources/portfolio/roomi.svg';
import nusreg from '../resources/portfolio/nusreg.png';
import lb_laptop_ab1 from '../resources/portfolio/lb_laptop_ab1.png';
import lb_laptop_ab2 from '../resources/portfolio/lb_laptop_ab2.png';
import lb_mobile_ab from '../resources/portfolio/lb_mobile_ab.png';
import lb_mobile_checkout1 from '../resources/portfolio/lb_mobile_checkout1.png';
import lb_mobile_checkout2 from '../resources/portfolio/lb_mobile_checkout2.png';
import lb_mobile_checkout3 from '../resources/portfolio/lb_mobile_checkout3.png';
import lb_mobile_checkout4 from '../resources/portfolio/lb_mobile_checkout4.png';
import odsv1 from '../resources/portfolio/odsv1.png';
import odsv2 from '../resources/portfolio/odsv2.png';
import nhouse1 from '../resources/portfolio/nhouse1.png';
import nhouse2 from '../resources/portfolio/nhouse2.png';
import nhouse3 from '../resources/portfolio/nhouse3.png';
import mivpay from '../resources/portfolio/mivpay.svg';


export const resumeUrl = 'https://drive.google.com/file/d/1Ri3-7eHY_XVpla0tu-x9PceQflMFlKVE/view?usp=sharing';

export const portfolios = [
    {
        category: 'UI/UX Design',
        isHighlight: true,
        name: 'Roomi',
        duration: 'Aug 2020 - Dec 2020',
        desc: 'Designed a mobile application for the purpose of finding an ideal house mate from the perspective of a person who has a space to live, as well as that looking for a place to live.',
        imageHref: [roomi]
    },
    {
        category: 'UI/UX Design',
        isHighlight: true,
        name: 'NUSReg',
        duration: 'Aug 2020 - Dec 2020',
        desc: 'Redesign of the NUS EduReg, a module registration platform used by students in NUS, through a series of user study.',
        imageHref: [nusreg]
    },
    {
        category: 'Product',
        isHighlight: true,
        name: 'MivPay',
        duration: 'Jan 2021 - Jul 2021',
        desc: 'Conducted user interviews and designed mockup to allow users to share reviews on purchases for cashback.',
        imageHref: [mivpay]
    },
    {
        category: 'UI/UX Design',
        isHighlight: true,
        name: 'Love, Bonito',
        duration: 'Aug 2020 - Jan 2021',
        desc: 'UI/UX and icon designs for minimum checkout for free delivery and media mention.',
        imageHref: [lb_mobile_ab, lb_mobile_checkout1, lb_laptop_ab2, lb_mobile_checkout2, lb_laptop_ab1, lb_mobile_checkout3, lb_mobile_checkout4]
    },
    {
        category: 'Social Media Collaterals',
        isHighlight: false,
        name: 'NUSSU Open Day 2020',
        duration: '',
        desc: 'Designed collaterals used on the NUSSU social media accounts for the publicity leading up to the NUS e-Open House & Student Life talks 2020.',
        website: '',
        imageHref: [odsv1, odsv2]
    },
    {
        category: 'Social Media Collaterals',
        isHighlight: true,
        name: 'Enterprise House (N-House)',
        duration: 'Nov 2019 - Mar 2020',
        desc: 'Designed collaterals used on the N-House social media accounts, Telegram channel and email blast to publicise the Wicked Wednesdays events and 10 Year Anniversary.',
        imageHref: [nhouse2, nhouse3, nhouse1]
    }
];

export const experiences = [
    {
        name: "Full Stack Developer Intern",
        duration: "Jan 2021 - Aug 2021",
        company: "GoalsMapper Pte Ltd",
        desc: [
            "Collaborated with the Product Development Team on the development of the platform with over 2,000 users",
            "Designed and built mobile responsive frontend application using React, including translating mock-ups into code",
            "Developed and designed RESTful APIs and functional databases on the backend using Django Python",
            "Performed unit testing using Endtest to streamline the process of testing for the platform"
        ]
    },
    {
        name: "Product Management Intern",
        duration: "Aug 2020 - Jan 2021",
        company: "LoveBonito Pte Ltd",
        desc: [
            "Analysed end customer problems through data analysis using Google Analytics and proposed potential factors to work on to the Product Head",
            "Conducted A/B testing with Google Optimise for users on the Singapore, Malaysia and International website",
            "Updated onsite touchpoints and create pop-ups for websites using HTML, CSS and JavaScript",
            "Designed website UI/UX using Figma and an icon using Illustrator found on the International website",
            "Created solutions through detailing out workflows and system interactions on FluidUI"
        ]
    },
    {
        name: "Part-Time Private Tutor (Secondary)",
        duration: "Feb 2018 – Oct 2021",
        company: "SimleTutor Pte Ltd",
        desc: [
            "Tutored 8 students over 3.5 years, with observed improvements by 2 grades on average",
            "Evaluated student’s progress and discussed with parents on how to work on their weaknesses",
            "Prepared educational materials, assigned homework and corrected assignments"
        ]
    }
];

export const education = [
    {
        school: "National University of Singapore (NUS)",
        degree: "Bachelor of Computing with Honours",
        duration: "Aug 2018 - May 2022 (Expected)",
        desc: [
            "Major in Computer Science and Minor in Management", 
            "NUS Overseas Colleges (NOC), Singapore, Jan 2021 – Jul 2021", 
            "Coursework: Interaction Design, Technological Innovation, Software Engineering, Start Up Case Study & Analysis, Finance"
        ]
    },
    {
        school: "National Junior College",
        degree: "H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics",
        duration: "Jan 2016 - Dec 2017",
        desc: [
            "Chairperson of student-initiated volunteer project in collaboration with Sree Narayana Mission Home",
            "Member in Badminton and represented the school in the National A Div Girls", 
        ]
    }
];

export const expertise = 'Product Management, Web Design and Development, Full Stack Development, Project Management, UI/UX Design';

export const introduction = "Hello, I’m Michelle, a final year NUS Computer Science student! Currently actively looking for roles as an Associate Product Manager in the tech industry. I have experience interning with Love, Bonito as a Product Intern and GoalsMapper as a Full Stack Developer.";

export const pages = [
    { href: "/michelle", label: "Home" },
    { href: "/michelle/about", label: "About" },
    { href: "/michelle/portfolio", label: "Portfolio" },
    { href: "/michelle/contact", label: "Contact" },
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
        toolList: ['React', 'Redux', 'Material UI', 'Bootstrap']
    },
    {
        name: 'Development - Backend',
        toolList: ['Django Python', 'PostgreSQL', 'MongoDB', 'NodeJS']
    },
    {
        name: 'UI/UX Design',
        toolList: ['Figma', 'FluidUI', 'Balsamiq', 'WordPress', 'Wix']
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
        toolList: ['JavaScript', 'Python', 'HTML', 'CSS', 'Java',  'Swift', 'C', 'C++']
    }
];

export const cca = [
    {
        cca: 'NUS ENterprise House (N-House)',
        name: 'Residential Assistant, Marketing Communications',
        duration: 'Dec 2021 - May 2022 (Expected)',
        desc: [
            'Plan and implement events with the N-House team to support residents in their entrepreneurial journey',
            'Counsel 14 undergraduate residents from various background on academic and personal questions',
            'Lead a team of 15 for publicity and production projects',
            'Designed posters published on N-House social media for various events from Jan to Dec 2021, including N-House’s flagship event Pitch Night and 10 Year Anniversary, using Canva and Illustrator'
        ]
    },
    {
        cca: 'NUS Student Union Venture Enterprise',
        name: 'Executive, Product Development',
        duration: 'Aug 2021 – Dec 2021',
        desc: [
            'Conducted market surveys to learn about the product that customers want and their willingness to pay',
            'Designed merchandise based on the preferences indicated by potential customers'
        ]
    },
    {
        cca: 'Aiesec in NUS',
        name: 'Executive, Finance and External Relations | Vice President, External Relations (NLDC)',
        duration: 'Aug 2019 – Jul 2020',
        desc: [
            'Conducted market research and reviewed current product pricings under the Product Pricing Team',
            'Led a team of 3 in raising 3 in-kind sponsors for National Leadership Development Conference (NLDC)'
        ]
    },
    {
        cca: 'NUS Student Union',
        name: 'Executive, Open Day Student Village Publicity Team',
        duration: 'Nov 2019 – Mar 2020',
        desc: [
            'Designed social media posts and stories, using Photoshop and Illustrator, gaining over 1,800 outreach'
        ]
    },
    {
        cca: 'School of Computing',
        name: 'Float Head, Receive-and-Give (RAG) Committee',
        duration: 'Dec 2018 – Aug 2019',
        desc: [
            'Led the float team in float design, manpower allocation, budget allocation and spending, attaining Silver Award'
        ]
    },
];
