import Link from "next/link"
import { Container } from "../layout/Container"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_300px] md:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-1000">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="mt-8 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Building <span className="text-foreground">scalable systems</span> for modern businesses.
            </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Hi, I’m Jairus. I build high-performance web applications, 
            custom SaaS interfaces, and business solutions that help you scale efficiently.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Work with me</Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Headshot Placeholder */}
        <div className="hidden md:block">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-4 border-border bg-gradient-to-br from-muted to-muted/20 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-muted-foreground/50">
               [Your Photo Here]
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}