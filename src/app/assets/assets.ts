import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import arrow_icon from './arrow-icon.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import tldr_image from './tldr.jpeg';
import taskmate_image from './TaskMate.jpg';
import user_image from './user-image.jpeg';
import user_image_2 from './user-image-2.jpeg';
import react_icon from './react.svg'
import next_icon from './next.svg'


export const assets = {
    code_icon,
    edu_icon,
    project_icon,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    profile_img,
    download_icon,
    header_bg_color,
    arrow_icon,
    menu_black,
    close_black,
    close_white,
    web_icon,
    right_arrow,
    react_icon,
    send_icon,
    tldr_image,
    taskmate_image,
    user_image,
    user_image_2,
    next_icon
};


export const workData = [
    {
        title: 'TLDR',
        description: 'Extrapolates the TL;DR of your syllabi!',
        bgImage: assets.tldr_image,
        bio: "",
        stack: 'Next.js, Supabase, React, Python, GeminiAPI',
        githubLink: "https://github.com/PaoloAJ/SwampHacks-26",
        demoLink: "https://devpost.com/software/tldr-y4v2ha",
        dates: "Jan 2026",
    },
    {
        title: 'TaskMate',
        description: 'Accountability App for Students',
        bgImage: assets.taskmate_image,
        bio: "",
        stack: 'Next.js, DynamoDB, S3 React, GraphQL',
        githubLink: "https://github.com/PaoloAJ/TaskMate",
        demoLink: "Sep 2025 - Dec 2025",
    },
    {
        title: 'MovieMatcher',
        description: 'Movie Recommendations based on your favorites',
        bio: "",
        bgImage: assets.header_bg_color,
        stack: 'Flask, C++, Python',
        githubLink: "https://github.com/Alrwx/Project-3---Movie-Matcher",
        demoLink: "https://www.youtube.com/watch?v=fMej5pbPSQ",
        dates: "June 2025 - Aug 2025",
        
    }
];

export const ExperienceData = [
  {
    title: "PrepifyAI",
    role: "Software Engineering Intern",
    type: "Co-op",
    date: "Oct – Dec 2025",
    description: "Engineered an adaptive learning interface featuring a state-driven frontend and a progressive architecture that leverages n8n pipelines and MongoDB to automate AI-generated assessments.",
    highlights: [
      "adaptive learning interface",
      "state-driven frontend",
      "progressive architecture",
      "n8n pipelines",
      "MongoDB",
      "AI-generated assessments"
    ],
    linkedIn: "https://www.linkedin.com/company/prepify-ai/",
  },
  {
    title: "Debate Central",
    role: "Backend Lead",
    type: "Co-op",
    date: "Nov - Present",
    description: "Architected a scalable FastAPI backend integrated with Supabase and PostgreSQL, implementing secure Row-Level Security (RLS) and real-time features for an AI-driven evaluation platform.",
    highlights: [
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security (RLS)",
      "real-time features",
      "AI-driven evaluation platform"
    ],
    linkedIn: "https://www.linkedin.com/company/debate-central-inc/",
  },
];

export const LeadershipData = [
  {
    organization: "Association for Computing Machinery",
    role: "Marketing Lead",
    dates: "Aug 2025 - Present",
    description: "Design digital assets and manage social media campaigns for a 2,000+ member community, boosting attendance by 50% and active participation among 700+ registered members through targeted marketing initiatives.",
  },
  {
    organization: "Association for Computing Machinery",
    role: "Design Team Lead",
    dates: "Nov 2025 - Present",
    description: "Leading a team in the ongoing development of a multi-organization attendance management platform for UF ACM, coordinating frontend engineers while overseeing system design, role-based admin access, and customizable, secure check-in workflows.",
  },
  {
    organization: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow",
    dates: "Nov 2025 - Present",
    description: "18-month professional development fellowship for high-achieving diverse talent.",
  },
  {
    organization: "National Society of Black Engineers",
    role: "APEX Certified National Member",
    dates: "Aug 2025 - Present",
    description: "APEX Ceritifed Member (GPA > 3.5), Attended the Fall Regional Conference to network and build connections with fellows.",
  },
  {
    organization: "ColorStack",
    role: "National Board Member",
    dates: "Dec 2024 - Present",
    description: "National Member of ColorStack, have access to the National Board Member Slack, getting participation in networking events and career showcases.",
  },
]

export const infoList = [
    { icon: assets.code_icon, title: 'Languages', description: 'Python, JavaScript, TypeScript, SQL, PostgreSQL, C++, Assembly' },
    { icon: assets.edu_icon,title: 'Education', description: 'Bachelors in Computer Science, Minor in Electrical Engineering, AI Certificate' },
    { icon: assets.project_icon, title: 'Projects', description: 'Focused primarily on Backend / System Design, but included Full-Stack work!' }
];


//work in progress, template assets for now
export const techIconMap: { [key: string]: any } = {
  'Next.js': assets.next_icon,
  'React': assets.react_icon,
  'Supabase': assets.firebase,
  'MongoDB': assets.mongodb,
  'AWS': assets.firebase,
  'DynamoDB': assets.firebase,
  'S3': assets.firebase,
  'GraphQL': assets.right_arrow,
  'Tailwind CSS': assets.right_arrow,
  'Flask': assets.firebase,
  'C++': assets.code_icon,
  'Python': assets.code_icon,
  'Firebase': assets.firebase,
  'Git': assets.git,
  'SFML': assets.firebase,
  'Pygame': assets.firebase,
};

// export const projects = [
//     {
//         title: "TL;DR",
//         description: "asdas",
//         technologies: ["Supabase", "Next.js", "Tailwind CSS", "React"],
//         githubLink: "https://github.com/PaoloAJ/SwampHacks-26",
//         demoLink: "https://devpost.com/software/tldr-y4v2ha",
//         image: "",
//         long_bio: "",
//     },
//     {
//         title: "TaskMate",
//         description: "asdas",
//         technologies: ["AWS", "Next.js", "Tailwind CSS", "React"],
//         githubLink: "https://github.com/PaoloAJ/TaskMate",
//         demoLink: "",
//         image: "",
//         long_bio: "",
//     },
//     {
//         title: "MovieMatcher",
//         description: "High Performance movie recommendation app",
//         technologies: ["Flask", "React", "C++"],
//         githubLink: "https://github.com/Alrwx/Project-3---Movie-Matcher",
//         demoLink: "https://www.youtube.com/watch?v=fMej5pbPSQ",
//         image: "",
//         long_bio: "",
//     },
//     {
//         title: "MineSweeper",
//         description: "",
//         technologies: ["C++", "SFML"],
//         githubLink: "",
//         demoLink: "https://github.com/Alrwx/Minesweeper",
//         image: "",
//         long_bio: "",
//     },
//     {
//         title: "Whackamole",
//         description: "",
//         technologies: ["Python", "Pygame"],
//         githubLink: "https://github.com/Alrwx/Whackamole",
//         demoLink: "",
//         image: "",
//         long_bio: "",
//     },
//     {
//         title: "Sudoku",
//         description: "",
//         technologies: ["Python", "Pygame"],
//         githubLink: "https://github.com/PaoloAJ/Sudoku",
//         demoLink: "https://www.youtube.com/watch?v=AfeQyrh4t5k",
//         image: "",
//         long_bio: "",
//     },
// ]