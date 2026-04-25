import { Container } from "@/components/layout/Container"

export default function AboutPage() {
  return (
    <main className="py-24">
      <Container>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Helping businesses build <span className="text-foreground">better systems</span>.
          </h1>
          
          <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m Jairus, a Computer Science student at Cebu Institute of Technology 
              passionate about bridging the gap between complex engineering and practical business needs.
            </p>

            <p>
              Whether it’s a **local business** like a clinic or barbershop looking to automate 
              bookings, or a **SaaS startup** needing a high-performance frontend, I focus on 
              delivering solutions that don’t just look good but actually work.
            </p>

            <p>
              My stack is focused on modern, reliable technologies like **Next.js**, **TypeScript**, 
              and **Tailwind CSS**. I believe in clean code, scalable architecture, and most importantly, 
              building things that solve real operational problems.
            </p>

            <p>
              Currently, I’m specializing in:
            </p>
            
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Custom Business Dashboards & CRM systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Automated Booking & Appointment Platforms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Modern SaaS Landing Pages & Interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>API Integrations & Backend Automation</span>
              </li>
            </ul>

            <p className="pt-8 border-t border-border">
              Let’s turn your idea into a fast, reliable, and practical web system. 
              I’m always open to discussing new projects and partnerships.
            </p>
          </div>
        </div>

      </Container>
    </main>
  )
}