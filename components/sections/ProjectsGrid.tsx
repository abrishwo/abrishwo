"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

const filters = ["All", "Web", "Mobile", "AI", "Data Science"];

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "primary" : "outline"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
