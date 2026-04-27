import { notFound } from "next/navigation"
import Image from "next/image"
import { Container } from "@/components/layout/Container"
import { projects } from "@/content/projects"
import { Settings, Brain, Wrench, CheckCircle } from "lucide-react"
import { ProjectGallery } from "@/components/sections/ProjectGallery"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="py-24">
      <Container>

        <h1 className="text-4xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          {project.description}
        </p>

        <ProjectGallery images={project.images} title={project.title} />

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Tech Stack</h2>

          <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {project.tech.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          )}
        </div>

        {project.details && (
          <div className="mt-20 border-t pt-20">
            <div className="grid gap-16">
              {/* Features */}
              <section>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-md text-primary">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Core Features</h2>
                </div>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.details.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground bg-muted/30 p-4 rounded-lg border border-border/50">
                      <span className="text-primary font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-12">
                <section>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-md text-primary">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Key Challenge</h2>
                  </div>
                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {project.details.challenge}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-md text-primary">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Solution</h2>
                  </div>
                  <div className="mt-6 text-muted-foreground leading-relaxed">
                    <p>{project.details.solution}</p>
                    {project.details.solutionBullets && (
                      <ul className="mt-4 space-y-2">
                        {project.details.solutionBullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">-</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              </div>

              {/* Outcome */}
              <section className="bg-muted/50 p-8 rounded-2xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-md text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Outcome</h2>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.details.outcome.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

      </Container>
    </main>
  )
}