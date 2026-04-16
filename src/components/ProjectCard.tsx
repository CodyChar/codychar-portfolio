import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  discipline: string;
  thumbnail: string;
  isProtected?: boolean;
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  discipline,
  thumbnail,
  isProtected,
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
      <div className="mt-3 space-y-0.5">
        <h3 className="font-medium">
          {title}
          {subtitle && (
            <span className="text-muted"> — {subtitle}</span>
          )}
        </h3>
        <p className="text-sm text-muted">{discipline}</p>
      </div>
    </Link>
  );
}
