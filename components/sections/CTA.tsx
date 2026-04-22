import Link from "next/link"
import { Container } from "../layout/Container"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24">
      <Container>

        <div className="rounded-2xl border bg-muted/30 p-10 text-center">
          
          <h2 className="text-3xl font-bold tracking-tight">
            Let’s build something useful
          </h2>

          <p className="mt-4 text-muted-foreground">
            Have a business idea, system, or website in mind? I help turn
            them into fast, modern web applications.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
          </div>

        </div>

      </Container>
    </section>
  )
}