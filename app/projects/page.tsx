import type { Project } from "@/lib/projects-db";

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3001/api/projects");
  const projects: Project[] = await response.json();

  return (
    <main>
      <h1>Projects Overview</h1>

      {projects.map((project: Project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}
