import { NextResponse } from "next/server";
import { getProject, getProjects } from "@/lib/content";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProject(slug);
  const allProjects = getProjects();

  return NextResponse.json({ project: project || null, allProjects });
}
