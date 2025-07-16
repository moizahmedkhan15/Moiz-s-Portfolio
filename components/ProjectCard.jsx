import Image from "next/image";

export default function ProjectCard({ title, description, imgSrc, demoLink, codeLink, tech }) {
  return (
    <div className="project-card">
      <Image src={imgSrc} alt={title} width={400} height={250} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <p className="project-tech"><span className="tech-label">Tech :<br/></span> {tech}</p>
      <div className="project-links">
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Github Link</a>
      </div>
    </div>
  );
}
