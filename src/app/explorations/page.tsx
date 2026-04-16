import Image from "next/image";
import { explorations } from "@/data/explorations";

export const metadata = {
  title: "Explorations — Cody Char",
};

export default function ExplorationsPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <section className="py-12 md:py-16">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Explorations
        </h1>
        <p className="mt-2 text-muted">
          Side projects, experiments, and creative explorations.
        </p>
      </section>

      <section className="grid gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {explorations
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <div key={item.slug} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-border/30">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized={item.thumbnail.endsWith(".gif")}
                />
              </div>
              <div className="mt-3 space-y-0.5">
                <h3 className="font-medium">{item.title}</h3>
                {item.date && (
                  <p className="text-sm text-muted">{item.date}</p>
                )}
                {item.description && (
                  <p className="text-sm text-muted">{item.description}</p>
                )}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
