"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export const TechStack = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center gap-2"
              variants={iconVariants}
              whileHover="hover"
            >
              <skill.icon className="w-12 h-12 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
