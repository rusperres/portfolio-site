import { notFound } from "next/navigation"
import { Container } from "@/components/layout/Container"
import { projects } from "@/content/projects"

type Props = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="py-24">
      <Container>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight">
          {project.title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {project.description}
        </p>

        {/* Image placeholder */}
        <div className="mt-10 aspect-video rounded-lg bg-muted" />

        {/* Tech stack */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {project.tech.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-primary hover:underline"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          )}
        </div>

      </Container>
    </main>
  )
}