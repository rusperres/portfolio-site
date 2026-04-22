import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Projects } from "@/components/sections/Projects"
import { TechStack } from "@/components/sections/TechStack"
import { CTA } from "@/components/sections/CTA"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <CTA />
    </main>
  )
}