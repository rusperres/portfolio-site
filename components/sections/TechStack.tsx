import { Container } from "../layout/Container"
import { Badge } from "@/components/ui/badge"

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Vercel",
  "Supabase"
]

export function TechStack() {
  return (
    <section className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tools and technologies I use to build fast, scalable web applications.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

      </Container>
    </section>
  )
}