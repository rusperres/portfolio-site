import Link from "next/link"
import { Container } from "./Container"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <span className="text-xl font-bold tracking-tighter">
              Jairus<span className="text-accent text-2xl">.</span>dev
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-medium text-muted-foreground md:flex">
            <Link href="/#projects" className="transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/#services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button size="sm" asChild className="hidden sm:inline-flex">
              <Link href="/contact">Start a Project</Link>
            </Button>
            {/* Mobile menu could go here */}
          </div>
        </div>
      </Container>
    </header>
  )
}