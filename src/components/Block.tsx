import { type ContentBlock } from "@/data/projects";
import InteractiveEmbed from "./InteractiveEmbed";

const widthClasses: Record<ContentBlock["width"], string> = {
  full: "col-span-full",
  "1/2": "col-span-full md:col-span-1",
  "1/3": "col-span-full md:col-span-1",
  "2/3": "col-span-full md:col-span-2",
};

export default function Block({ block }: { block: ContentBlock }) {
  const widthClass = widthClasses[block.width];

  switch (block.type) {
    case "heading":
      return (
        <div className={widthClass}>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {block.content}
          </h2>
        </div>
      );

    case "text":
      return (
        <div className={widthClass}>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {block.content}
          </p>
        </div>
      );

    case "image":
      return (
        <div className={widthClass}>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-border/30">
            {block.src && (
              <img
                src={block.src}
                alt={block.alt || ""}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {block.caption && (
            <p className="mt-2 text-sm text-muted">{block.caption}</p>
          )}
        </div>
      );

    case "embed":
      return (
        <div className={widthClass}>
          <InteractiveEmbed
            src={block.src || ""}
            title={block.alt || "Interactive Scene"}
            description={block.caption}
            aspectRatio={block.content || "16/9"}
            autoload={block.autoload}
          />
        </div>
      );

    case "credits":
      return (
        <div className={widthClass}>
          <div className="border-t border-border pt-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
              Credits
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {block.items?.map((item) => (
                <div key={item.role} className="text-sm">
                  <span className="text-muted">{item.role}:</span>{" "}
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "spacer":
      return <div className={`${widthClass} h-8 md:h-12`} />;

    default:
      return null;
  }
}
