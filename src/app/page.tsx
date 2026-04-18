import ProjectCard from "@/components/ProjectCard";
import { getProjects, getPageContent } from "@/lib/content";

export default function Home() {
  const projects = getProjects();
  const page = getPageContent("home");

  return (
    <div className="px-6 md:px-12 lg:px-20">
      <section className="py-16 md:py-24">
        <h1 className="mx-auto max-w-2xl text-center text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          {page.tagline ||
            "Hi, I'm a Sr. Product Designer who loves making advanced technology feel approachable, helpful and human."}
        </h1>
      </section>

      <section className="grid gap-8 pb-20 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            discipline={project.discipline}
            thumbnail={project.thumbnail}
            isProtected={project.protected}
            client={project.client}
            role={project.role}
            tags={project.tags}
            year={project.year}
          />
        ))}
      </section>
    </div>
  );
}
