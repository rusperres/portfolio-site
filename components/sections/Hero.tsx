import Link from "next/link"
import { Container } from "../layout/Container"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          
          <p className="text-sm text-muted-foreground">
            Freelance Web Developer
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            I build modern web apps & systems for businesses
          </h1>

          <p className="mt-6 text-muted-foreground">
            Specializing in business websites, SaaS interfaces, and custom
            web applications like clinic management systems.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/contact">Hire Me</Link>
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