import Link from "next/link"
import { Container } from "../layout/Container"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-border bg-muted/20 p-12 text-center md:p-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Let’s build something <span className="text-foreground">meaningful</span> together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Have a business idea, system, or website in mind? I’m currently available 
            for new partnerships and freelance opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">Browse Work</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}