import { Container } from "../layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/content/services"

export function Services() {
  return (
    <section className="py-24">
      <Container>
        
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            I help businesses build websites, systems, and interfaces that
            actually solve real problems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                
                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-muted-foreground">
                      • {feature}
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