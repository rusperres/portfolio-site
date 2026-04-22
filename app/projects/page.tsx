import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/content/projects"

export default function ProjectsPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">
            All Projects
          </h1>
          <p className="mt-4 text-muted-foreground">
            A collection of systems, SaaS apps, and web projects I’ve built.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
            >
              <Card className="overflow-hidden hover:scale-[1.01] transition">
                
                <div className="aspect-video bg-muted" />

                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.tech.map((t) => (
                      <span key={t}>#{t}</span>
                    ))}
                  </div>
                </CardContent>

              </Card>
            </Link>
          ))}
        </div>

      </Container>
    </main>
  )
}