import ProjectCard from "./ProjectCard";

const DesktopProjects = ({ projects }) => {
  return (
    <div className="relative">
      {projects.map((project, index) => (
        <div
          key={project.name}
          style={{
            position: "sticky",
            top: `${20 + index * 3}vh`,
            zIndex: index,
            // marginBottom: "20vh",
          }}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default DesktopProjects;
