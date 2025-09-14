import { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: "Web" | "Mobile" | "AI" | "Data Science";
  image: string; // Path to image in /public folder
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
}

export interface Certificate {
    id: number;
    name: string;
    issuer: string;
    date: string;
    url?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  author: string;
  content: string; // Markdown content
}

export interface Skill {
    name: string;
    icon: IconType;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export interface Testimonial {
    id: number;
    name: string;
    quote: string;
    company?: string;
    avatar?: string;
}
