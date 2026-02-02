import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'TLDR',
        description: 'Web Design',
        bgImage: '/tldr.jpeg',
        stack: 'Next.js, Supabase, React, Python, GeminiAPI',
        githubLink: "https://github.com/PaoloAJ/SwampHacks-26",
        demoLink: "https://devpost.com/software/tldr-y4v2ha",
    },
    {
        title: 'TaskMate',
        description: 'Mobile App',
        bgImage: 'TaskMate.jpeg',
        stack: 'Next.js, DynamoDB, S3 React, GraphQL',
        githubLink: "https://github.com/PaoloAJ/TaskMate",
        demoLink: "",
    },
    {
        title: 'MovieMatcher',
        description: 'Web Design',
        bgImage: '/work-3.png',
        stack: 'Flask, C++, Python',
        githubLink: "https://github.com/Alrwx/Project-3---Movie-Matcher",
        demoLink: "https://www.youtube.com/watch?v=fMej5pbPSQ",
    }
];

export const ExperienceData = [
  {
    title: "PrepifyAI",
    role: "Software Engineering Intern",
    type: "Co-op",
    description: "Engineered an adaptive learning interface featuring a state-driven frontend and a progressive architecture that leverages n8n pipelines and MongoDB to automate AI-generated assessments.",
    linkedIn: "https://www.linkedin.com/company/prepify-ai/",
  },
  {
    title: "Debate Central",
    role: "Backend Lead",
    type: "Co-op",
    description: "Architected a scalable FastAPI backend integrated with Supabase and PostgreSQL, implementing secure Row-Level Security (RLS) and real-time features for an AI-driven evaluation platform.",
    linkedIn: "https://www.linkedin.com/company/debate-central-inc/",
  },
];

export const LeadershipData = [
  {
    organization: "ACM",
    role: "Marketing Lead",
    description: "Design digital assets and manage social media campaigns for a 2,000+ member community, boosting attendance by 50% and active participation among 700+ registered members through targeted marketing initiatives.",
  },
  // {
  //   organization: "ACM",
  //   role: "Design Team Lead",
  //   description: "",
  // },
  {
    organization: "Management Leadership for Tomorrow",
    role: "Career Prep Fellow",
    description: "18-month professional development fellowship for high-achieving diverse talent.",
  },
  {
    organization: "National Society of Black Engineers",
    role: "APEX Certified National Member",
    description: "APEX Ceritifed Member (GPA > 3.5), Attended the Fall Regional Conference to network and build connections with fellows.",
  },
  {
    organization: "ColorStack",
    role: "National Board Member",
    description: "National Member of ColorStack, have access to the National Board Member Slack, getting participation in networking events and career showcases.",
  },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, JavaScript, TypeScript, SQL, PostgreSQL, C++, Assembly' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelors in Computer Science, Minor in Electrical Engineering, AI Certificate' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Focused primarily on Backend / System Design, but included Full-Stack work!' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];