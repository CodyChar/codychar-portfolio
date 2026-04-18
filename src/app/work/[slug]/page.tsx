"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Block from "@/components/Block";
import { useState, useEffect } from "react";
import type { Project } from "@/lib/content";

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === "codycharxr") {
      onSuccess();
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <h2 className="text-lg font-medium">This project is protected</h2>
        <p className="text-sm text-muted">Enter the password to view.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent"
        />
        {error && <p className="text-sm text-red-500">Incorrect password.</p>}
        <button
          type="submit"
          className="w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View Project
        </button>
      </form>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const [unlocked, setUnlocked] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/content/project/${params.slug}`)
      .then((r) => r.json())
      .then((data) => {
        setProject(data.project || null);
        setAllProjects(data.allProjects || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-foreground" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium">Project not found</h1>
          <Link href="/" className="mt-4 inline-block text-sm text-accent hover:underline">
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  if (project.protected && !unlocked) {
    return <PasswordGate onSuccess={() => setUnlocked(true)} />;
  }

  const otherProjects = allProjects.filter((p) => p.slug !== project.slug);
  const sortedBlocks = [...project.blocks].sort((a, b) => a.order - b.order);

  return (
    <div className="px-6 md:px-12 lg:px-20">
      {project.thumbnail && (
        <section className="relative mb-12 aspect-[21/9] overflow-hidden rounded-xl bg-border/30">
          <Image
            src={project.thumbnail}
            alt={`${project.title} ${project.subtitle}`}
            fill
            className="object-cover"
            sizes="100vw"
            preload
            unoptimized={project.thumbnail.endsWith(".gif")}
          />
        </section>
      )}

      <div className="mx-auto max-w-4xl">
        <div className="mb-4 text-sm text-muted">{project.discipline}</div>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
          {project.subtitle && (
            <span className="text-muted"> — {project.subtitle}</span>
          )}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          {project.client && (
            <span>Client: <span className="text-foreground">{project.client}</span></span>
          )}
          {project.role && (
            <span>Role: <span className="text-foreground">{project.role}</span></span>
          )}
          {project.year && <span>{project.year}</span>}
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {sortedBlocks.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>

      <section className="mt-20 border-t border-border pt-12 pb-20">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted">
          You may also like
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-border/30">
                {p.thumbnail && (
                  <Image
                    src={p.thumbnail}
                    alt={`${p.title} ${p.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized={p.thumbnail.endsWith(".gif")}
                  />
                )}
              </div>
              <div className="mt-2 text-sm">
                <span className="font-medium">{p.title}</span>
                {p.subtitle && (
                  <span className="text-muted"> — {p.subtitle}</span>
                )}
                <p className="text-muted">{p.discipline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="pb-8 text-center">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &uarr; Back to Work
        </Link>
      </div>
    </div>
  );
}
