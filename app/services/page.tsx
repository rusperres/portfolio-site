import { Container } from "@/components/layout/Container"
import { services } from "@/content/services"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight">
            Services
          </h1>
          <p className="mt-4 text-muted-foreground">
            I build websites and web applications tailored for businesses
            that want performance, clarity, and real results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">

                <h2 className="text-lg font-semibold">
                  {service.title}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold">
            Have a project in mind?
          </h2>

          <p className="mt-2 text-muted-foreground">
            Let’s turn your idea into a working system.
          </p>

          <Button asChild className="mt-6">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>

      </Container>
    </main>
  )
}