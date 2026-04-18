import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  discipline: string;
  thumbnail: string;
  isProtected?: boolean;
  client?: string;
  role?: string;
  tags?: string[];
  year?: string;
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  discipline,
  thumbnail,
  isProtected,
  client,
  role,
  tags,
  year,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group block overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-border/30">
        <Image
          src={thumbnail}
          alt={`${title} ${subtitle}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={thumbnail.endsWith(".gif")}
        />
        {isProtected && (
          <div className="absolute top-3 right-3 rounded-full bg-background/80 px-2.5 py-1 text-xs text-muted backdrop-blur-sm">
            Protected
          </div>
        )}
      </div>
      <div className="mt-3 space-y-1.5">
        <h3 className="font-medium">
          {title}
          {subtitle && (
            <span className="text-muted"> — {subtitle}</span>
          )}
        </h3>
        <p className="text-sm text-muted">{discipline}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          {client && <span>Client: {client}</span>}
          {role && <span>Role: {role}</span>}
          {year && <span>{year}</span>}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
