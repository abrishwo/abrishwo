"use client";

import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="bg-light dark:bg-dark rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* I will create placeholder images later */}
      {/* <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <span className="text-xs font-semibold bg-primary/20 text-primary dark:bg-primaryDark/20 dark:text-primaryDark px-2 py-1 rounded-full">{project.category}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 h-20">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-4 mt-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryDark">
              <FaGithub size={24} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryDark">
              <FaLink size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
