import Link from "next/link"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <Container>
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold tracking-tighter">
              Jairus<span className="text-accent">.</span>dev
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Built with Next.js, Tailwind CSS, and passion.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <Link href="/projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link href="https://github.com" target="_blank" className="transition-colors hover:text-foreground">
              GitHub
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jairus.dev
          </div>
        </div>
      </Container>
    </footer>
  )
}