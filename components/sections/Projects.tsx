import Link from "next/link"
import { Container } from "../layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/content/projects"
import Image from "next/image"

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of systems and applications I’ve built.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
            >
              <Card className="overflow-hidden hover:scale-[1.01] transition">
                
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>

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
    </section>
  )
}