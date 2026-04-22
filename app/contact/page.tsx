import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Send a message and I’ll get back to you
            as soon as possible.
          </p>
        </div>

        <form className="mt-10 max-w-xl space-y-4">

          <div>
            <label className="text-sm text-muted-foreground">
              Name
            </label>
            <Input placeholder="Your name" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Email
            </label>
            <Input type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Message
            </label>
            <textarea
              className="w-full rounded-md border bg-background p-3 text-sm"
              rows={5}
              placeholder="Tell me about your project..."
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>

        </form>

        <div className="mt-10 text-sm text-muted-foreground">
          Or reach me directly via email:
          <span className="text-foreground">jairusjaspervc@gmail.com</span>
        </div>

      </Container>
    </main>
  )
}