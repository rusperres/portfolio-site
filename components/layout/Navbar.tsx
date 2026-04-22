import Link from "next/link"
import { Container } from "./Container"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="font-semibold">
            Jairus.dev
          </Link>

          {/* Nav Links */}
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <Link href="/projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
          </nav>

          {/* CTA */}
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}