import ProjectCard from "./ProjectCard";

const MobileProjects = ({ projects }) => {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default MobileProjects;
