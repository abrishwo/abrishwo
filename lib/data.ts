// =================================================================================
// CMS INTEGRATION NOTE:
// This file contains mock data that simulates a headless CMS.
// In a real-world application, you would fetch this data from a service like
// Strapi, Sanity, or Contentful. The interfaces in `lib/types.ts` define the
// expected data structure.
// =================================================================================

import {
  Project,
  Experience,
  Certificate,
  BlogPost,
  Skill,
  NavLink,
  SocialLink,
} from "./types";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaAndroid
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiFlutter, SiOpenai } from "react-icons/si";

export const navLinks: NavLink[] = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/abrehamwondimu", icon: FaGithub },
    { name: "LinkedIn", url: "https://linkedin.com/in/abrehamwondimu", icon: FaLinkedin },
    { name: "EnatSoft", url: "https://enatsoft.com", icon: FaGlobe },
    { name: "Play Store", url: "https://play.google.com/store/apps/developer?id=Enat+Soft", icon: FaAndroid },
];

export const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Flutter", icon: SiFlutter },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Python", icon: FaPython },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "OpenAI API", icon: SiOpenai },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "EnatGPT",
    slug: "enat-gpt",
    category: "AI",
    image: "/images/projects/enatgpt.png",
    description: "An advanced AI chatbot leveraging the OpenAI API to provide intelligent, human-like conversations and assistance.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "Firebase"],
    liveUrl: "https://enatgpt.com", // Placeholder
    githubUrl: "https://github.com/abrehamwondimu/enatgpt", // Placeholder
  },
  {
    id: 2,
    title: "Edemy",
    slug: "edemy-app",
    category: "Mobile",
    image: "/images/projects/edemy.png",
    description: "A comprehensive eLearning mobile application for lecturers and students to share notes, resources, and course materials.",
    tags: ["Flutter", "Firebase", "Dart"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.enatsoft.edemy", // Placeholder
  },
  {
    id: 3,
    title: "Real-time Chat App",
    slug: "real-time-chat",
    category: "Web",
    image: "/images/projects/chat-app.png",
    description: "A full-stack web application for real-time messaging, built with the MERN stack and WebSockets for instant communication.",
    tags: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    githubUrl: "https://github.com/abrehamwondimu/chat-app", // Placeholder
  },
   {
    id: 4,
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Web",
    image: "/images/projects/portfolio.png",
    description: "My personal portfolio website to showcase my skills and projects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://abrehamwondimu.com", // Placeholder
    githubUrl: "https://github.com/abrehamwondimu/portfolio", // Placeholder
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Adadiko ICT",
    date: "Jan 2022 - Present",
    description: "Leading development of full-stack applications using MERN and Next.js. Building and maintaining mobile apps with Flutter. Integrating machine learning models into production environments.",
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Beton Property",
    date: "Jul 2020 - Dec 2021",
    description: "Developed and maintained web applications for the real estate sector. Worked with a team to design and implement new features, improving user experience and platform performance.",
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "HCL Technologies",
    date: "Jun 2018 - Jun 2020",
    description: "Started as a student intern and grew into an associate role. Gained foundational experience in software development, working on enterprise-level projects and collaborating with a large team.",
  },
];

export const certificates: Certificate[] = [
    { id: 1, name: "Machine Learning with Python", issuer: "IBM", date: "2021" },
    { id: 2, name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "2020" },
    { id: 3, name: "Full Stack Development (MEAN)", issuer: "Coursera", date: "2019" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "mastering-nextjs-14",
    title: "Mastering Next.js 14: A Deep Dive into the App Router",
    description: "Explore the new features and best practices of the Next.js 14 App Router, with code examples and performance tips.",
    date: "2024-07-15",
    image: "/images/blog/nextjs14.png",
    author: "Abreham Wondimu",
    content: `
## Introduction
Next.js 14 has brought some incredible changes...
    `
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs. React Native in 2024: Which to Choose?",
    description: "A detailed comparison of Flutter and React Native for cross-platform mobile development, looking at performance, developer experience, and ecosystem.",
    date: "2024-06-28",
    image: "/images/blog/flutter-rn.png",
    author: "Abreham Wondimu",
    content: `
## The Cross-Platform Dilemma
Choosing a framework for your mobile app is a critical decision...
    `
  },
];

export const education = {
    institution: "KIIT University, India",
    degree: "Bachelor of Technology (B.Tech)",
    date: "2017 - 2021",
    details: "Graduated with honors on a full scholarship, specializing in Computer Science and Engineering."
}

export const now = {
    currentlyWorkingOn: "I am currently focused on expanding my expertise in serverless architectures and exploring advanced AI integrations with the OpenAI API for a new personal project.",
    learning: "Diving deeper into Rust for high-performance back-end services.",
    reading: "Building a Second Brain by Tiago Forte",
    listeningTo: "Lo-fi beats for focused coding sessions."
}
