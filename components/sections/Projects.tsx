import { getProjects } from "@/lib/cms";
import { ProjectsGrid } from "./ProjectsGrid";

export const Projects = async () => {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};
