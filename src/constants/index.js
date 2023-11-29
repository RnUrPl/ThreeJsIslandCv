import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    html,
    javascript,
    jquery,
    linkedin,
    mobx,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    github,
    postgreSQL,
    threeJS,
    grpc,
    BNTU,
    free,
    url,
    todo,
    dash,
    job,
    run
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: jquery,
        name: "Jquery",
        type: "Frontend",
    },
    {
        imageUrl: threeJS,
        name: "ThreeJS",
        type: 'Frontend'
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: mobx,
        name: "MobX",
        type: "State Managment",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgreSQL,
        name :'PostgreSQL',
        type: "Database"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: grpc,
        name: "GRPC",
        type:"Backend"
    }
];

export const experiences = [
    {
        title: "Software Engieer",
        company_name: "Belarusian Nation Technical University",
        icon: BNTU,
        iconBg: "white",
        date: "September 2018 - June 2022",
        points: [
            "University education fortified my programming skills, forming the core of my development expertise.",
            "Exposure to varied methodologies guides my approach in creating scalable solutions professionally.",
            "Sharpened problem-solving skills from studies prove vital in addressing real-world challenges.",
            "Comprehensive education equips me with a strong, versatile skill set for navigating the tech industry.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: free,
        iconBg: "#fbc3bc",
        date: "Apr 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/RnUrPl',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/renat-yurkevich/',
    }
];

export const projects = [
    {
        iconUrl: url,
        theme: 'btn-back-red',
        name: 'Full Stack Links Cutter',
        description: 'Developed a web application for link shortening and customization, offering users a streamlined way to create shareable links, track engagement, and optimize their online communication experience.',
        link: 'https://github.com/RnUrPl/LinksCutter',
    },
    {
        iconUrl: todo,
        theme: 'btn-back-green',
        name: 'To Do App',
        description: 'Designed and implemented a task management web application that enables users to efficiently organize, prioritize, and track their to-do lists, fostering improved productivity and task completion.',
        link: 'https://github.com/RnUrPl/ToDoApp',
    },
    {
        iconUrl: grpc,
        theme: 'btn-back-blue',
        name: 'GRPC Chat app',
        description: 'Created an elegantly intuitive chat application that seamlessly integrates gRPC technology, ensuring efficient and real-time communication, while offering users a pleasant and user-friendly platform for collaborative messaging.',
        link: 'https://github.com/RnUrPl/ReactGRPCChatApp',
    },
    {
        iconUrl: dash,
        theme: 'btn-back-pink',
        name: 'Finincial Dashboard',
        description: 'Developed a comprehensive financial dashboard that provides users with a centralized and intuitive interface, offering insights into key financial metrics, investment portfolios, and transaction history, enhancing the overall management and analysis of financial data.',
        link: 'https://github.com/RnUrPl/NextJsFinancialDashboard',
    },
    {
        iconUrl: job,
        theme: 'btn-back-black',
        name: 'JobL',
        description: 'Established a job-finding service that harnesses the capabilities of external job APIs, enabling users to efficiently discover employment opportunities by aggregating and presenting job listings from multiple sources within a unified platform.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: run,
        theme: 'btn-back-yellow',
        name: 'Endless Runner',
        description: 'Developed an endless runner game, providing players with an engaging and dynamic experience where the character continuously moves forward, navigating through obstacles, collecting items, and aiming for high scores in an ever-changing and challenging game environment.',
        link: 'https://github.com/RenatUrkevich/EndlessRunner',
    }
];