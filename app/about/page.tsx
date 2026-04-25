import { Container } from "@/components/layout/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>

        {/* HERO SECTION */}
        <div className="grid gap-12 md:grid-cols-[1fr_300px] md:items-center">

          {/* TEXT */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1 text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-1000">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              About Me
            </div>
            
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
              I build systems that turn operations into{" "}
              <span className="text-foreground">
                simple, scalable software
              </span>.
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              I’m Jairus, a Computer Science student at Cebu Institute of Technology.
              I focus on building production-grade web systems that help businesses
              automate workflows, reduce manual work, and scale efficiently.
            </p>
          </div>

          {/* IMAGE */}
          <div className="hidden md:block">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-4 border-border bg-gradient-to-br from-muted to-muted/20 shadow-2xl">
              <Image
                src="/headshot.jpg"
                alt="Jairus Colindres"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* STORY SECTION */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Why I build</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Most small and mid-sized businesses rely on fragmented tools:
                spreadsheets, manual booking systems, or disconnected apps.
                I build software that replaces that complexity with clean, unified systems.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">My approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I focus on engineering simplicity. Every system I design prioritizes
                performance, usability, and maintainability. I don’t build features
                for complexity — I build for clarity and execution.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">What I work on</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Custom dashboards & internal tools",
                  "Booking & scheduling systems",
                  "SaaS frontends & landing pages",
                  "API integrations & automation"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Stack & execution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js", "TypeScript", "Tailwind CSS", "React", 
                  "Node.js", "PostgreSQL", "Prisma", "Supabase",
                  "Framer Motion", "Shadcn UI", "Git", "Docker"
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                I build with a focus on clean architecture, reusable components,
                and systems that scale without unnecessary complexity.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* CTA */}
        <div className="mt-24">
          <Card className="border-primary/20 bg-primary/[0.02]">
            <CardContent className="flex flex-col items-center py-12 text-center md:py-16">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Let’s build something useful
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                I’m open to collaborations, freelance work, and product ideas that solve real problems.
                Reach out via the contact page or email — I usually respond quickly.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </Container>
    </main>
  )
}