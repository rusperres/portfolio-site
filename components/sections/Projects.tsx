import Link from "next/link"
import { Container } from "../layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/content/projects"
import Image from "next/image"

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="py-24" id="projects">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of systems and applications I’ve built with a focus on clean engineering and user-centric design.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border transition-all duration-300 group-hover:border-accent/20 group-hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-muted/50 text-[10px] font-semibold uppercase tracking-wider">
                        {t}
                      </Badge>
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