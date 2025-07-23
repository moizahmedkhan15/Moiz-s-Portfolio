import ProjectCard from "./ProjectCard";
import projects from "./data/projectsData";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
