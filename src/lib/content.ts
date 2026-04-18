import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

interface KeystaticBlock {
  discriminant: string;
  value: Record<string, unknown>;
}

export interface ContentBlock {
  id: string;
  type: "text" | "image" | "video" | "heading" | "credits" | "spacer" | "embed";
  width: "full" | "1/2" | "1/3" | "2/3";
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
  items?: { role: string; name: string }[];
  autoload?: boolean;
  order: number;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  discipline: string;
  thumbnail: string;
  protected?: boolean;
  client?: string;
  role?: string;
  tags?: string[];
  year?: string;
  order: number;
  blocks: ContentBlock[];
}

export interface Exploration {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  thumbnail: string;
  tags?: string[];
  order: number;
}

function convertBlock(block: KeystaticBlock, index: number): ContentBlock {
  const type = block.discriminant as ContentBlock["type"];
  const val = block.value || {};
  return {
    id: `${type}-${index}`,
    type,
    width: (val.width as ContentBlock["width"]) || "full",
    content: val.content as string | undefined,
    src: val.src as string | undefined,
    alt: val.alt as string | undefined,
    caption: val.caption as string | undefined,
    items: val.items as { role: string; name: string }[] | undefined,
    autoload: val.autoload as boolean | undefined,
    order: index,
  };
}

export function getProjects(): Project[] {
  const dir = path.join(CONTENT_DIR, "projects");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const projects: Project[] = [];

  for (const file of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
    const slug = file.replace(".json", "");
    const blocks = Array.isArray(raw.blocks)
      ? raw.blocks.map((b: KeystaticBlock, i: number) => convertBlock(b, i))
      : [];

    projects.push({
      slug,
      title: raw.title || slug,
      subtitle: raw.subtitle || "",
      discipline: raw.discipline || "",
      thumbnail: raw.thumbnail || "",
      protected: raw.protected || false,
      client: raw.client || undefined,
      role: raw.role || undefined,
      tags: raw.tags || undefined,
      year: raw.year || undefined,
      order: raw.order ?? 99,
      blocks,
    });
  }

  return projects.sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  const file = path.join(CONTENT_DIR, "projects", `${slug}.json`);
  if (!fs.existsSync(file)) return undefined;

  const raw = JSON.parse(fs.readFileSync(file, "utf-8"));
  const blocks = Array.isArray(raw.blocks)
    ? raw.blocks.map((b: KeystaticBlock, i: number) => convertBlock(b, i))
    : [];

  return {
    slug,
    title: raw.title || slug,
    subtitle: raw.subtitle || "",
    discipline: raw.discipline || "",
    thumbnail: raw.thumbnail || "",
    protected: raw.protected || false,
    client: raw.client || undefined,
    role: raw.role || undefined,
    tags: raw.tags || undefined,
    year: raw.year || undefined,
    order: raw.order ?? 99,
    blocks,
  };
}

export function getExplorations(): Exploration[] {
  const dir = path.join(CONTENT_DIR, "explorations");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  const explorations: Exploration[] = [];

  for (const file of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
    const slug = file.replace(".json", "");
    explorations.push({
      slug,
      title: raw.title || slug,
      date: raw.date || undefined,
      description: raw.description || undefined,
      thumbnail: raw.thumbnail || "",
      tags: raw.tags || undefined,
      order: raw.order ?? 99,
    });
  }

  return explorations.sort((a, b) => a.order - b.order);
}

export function getPageContent(name: string): Record<string, string> {
  const file = path.join(CONTENT_DIR, "pages", `${name}.json`);
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}
