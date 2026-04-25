import { Container } from "../layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/content/services"

export function Services() {
  return (
    <section className="py-24" id="services">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Core Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            I help businesses build websites, systems, and interfaces that
            actually solve real problems through clean engineering and thoughtful design.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="h-full border-border/50 bg-card/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-accent/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}