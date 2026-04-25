import { Container } from "../layout/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Search, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    title: "Discovery",
    description: "We discuss your goals, target audience, and project requirements to map out the strategy.",
    icon: Search
  },
  {
    title: "Design",
    description: "Structure and user experience are planned carefully to ensure the solution is intuitive.",
    icon: PenTool
  },
  {
    title: "Development",
    description: "Building the application with clean code, modern tech, and focus on performance.",
    icon: Code
  },
  {
    title: "Launch",
    description: "Deploying your project to the world and providing support to ensure success.",
    icon: Rocket
  }
]

export function Process() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/50" id="process">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            How I Work
          </h2>
          <p className="mt-4 text-muted-foreground">
            A transparent and structured process to ensure your project is delivered on time and exceeds expectations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[1px] bg-border z-0 -translate-x-1/2" />
              )}
              <Card className="relative z-10 h-full border-none bg-transparent shadow-none">
                <CardContent className="p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
