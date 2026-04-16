import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <h1 className="mx-auto max-w-2xl text-center text-2xl font-medium leading-snug tracking-tight md:text-3xl">
        Hi, I&apos;m a Sr. Product Designer who loves making advanced
        technology feel approachable, helpful and human.
      </h1>

      <section className="mt-16 grid gap-8 pb-20 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            subtitle={project.subtitle}
            discipline={project.discipline}
            thumbnail={project.thumbnail}
            isProtected={project.protected}
          />
        ))}
      </section>
    </div>
  );
}
