import {
    contact,
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Nursery Assistant",
        company_name: "Kawamoto Orchid Nursery",
        icon: mongodb, // Placeholder icon
        iconBg: "#b7e4c7",
        date: "Oct 2017 – Present",
        points: [
            "Helped customers select and care for orchids, improving customer satisfaction and loyalty.",
            "Managed inventory and restocked supplies to ensure availability for customers.",
            "Facilitated the timely fulfillment of customer orders by efficiently coordinating the pick-up and delivery of plants."
        ],
    },
    {
        title: "Server",
        company_name: "Ichiriki Japanese Nabe Restaurant",
        icon: express, // Placeholder icon
        iconBg: "#fbc3bc",
        date: "Jan 2018 – Dec 2018",
        points: [
            "Greeted and seated guests promptly, provided menus and explained daily specials.",
            "Provided attentive service throughout the meal and promptly resolved any issues."
        ],
    },
    {
        title: "Sales Associate",
        company_name: "Twin Island Surf",
        icon: tailwindcss, // Placeholder icon
        iconBg: "#accbe1",
        date: "Nov 2016 - Dec 2017",
        points: [
            "Maintained an organized and visually appealing store environment.",
            "Arranged displays, stocked merchandise, and processed transactions efficiently."
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
        link: 'https://github.com/Nicsteg',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nicolas-steger/',
    }
];

export const projects = [
    {
        iconUrl: react, // Assuming use of Redux in complex state management
        theme: 'btn-back-green',
        name: 'Voluntree',
        description: 'Developed a website using Bootstrap-react and Meteor for the community of Hawaii to find volunteer opportunities.',
        link: 'https://github.com/Team-Octagon/voluntree',
    },
    {
        iconUrl: github, // Assuming use of Redux in complex state management
        theme: 'btn-back-green',
        name: 'VR-Health',
        description: 'Developed a platform using Unity and C# to create a virtual reality mental health platform.',
        link: 'https://github.com/VRHealth/VRHealth',
    },
    {
        iconUrl: react, // Assuming use of Redux in complex state management
        theme: 'btn-back-green',
        name: 'Snack-Squad',
        description: 'Developed a website using Bootstrap-react and Meteor for the University of Hawaii community to find local food options.',
        link: 'https://github.com/snack-squad/snack-squad',
    },
    {
        iconUrl: github, // Assuming use of Next.js for server-side rendering
        theme: 'btn-back-blue',
        name: 'PokeGUI',
        description: 'A Java-based GUI application representing a Pokemon species hierarchy.',
        link: 'https://nicsteg.github.io/',
    },
    {
        iconUrl: github, // Assuming backend usage with Node.js
        theme: 'btn-back-red',
        name: 'SHA-1 Project',
        description: 'Replicated a simple SHA-1 hash function in C++ to deepen understanding of cryptographic hashing.',
        link: 'https://github.com/Nicsteg/SHA-1-project',
    }
];