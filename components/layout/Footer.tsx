import Link from "next/link"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jairus.dev. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link href="/services" className="hover:text-foreground">
              Services
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  )
}