import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { TechStack } from "@/components/sections/TechStack"
import { CTA } from "@/components/sections/CTA"
import { Process } from "@/components/sections/Process"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <Process />
      <CTA />
    </main>
  )
}